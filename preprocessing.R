preprocess_raw <- function(file) {
  file <- read.csv(file)
  
  # Internal Utilities
  unnest <- function(scale){
    data <- file |>
      filter(screen == scale) |>
      select(participant_id, response) |>
      jsontools::json_unnest_longer(col='response', indices_to = 'index')
    data
  }
  
  # Preprocess
  if (!"end_screen" %in% file$screen) {
    print(paste0("Warning: Incomplete data for ", file))
    return(data.frame())
  }
  # Demographics
  dem <- file[file$screen == "demographics" & !is.na(file$screen), "response"]
  
  # Trials
  trials<-file[file$screen=='stimuli', ]
  response<- file[file$screen=='questionnaire',]
  
  # Questionnaire
  questionnaire<- file |>
    filter(screen == 'questionnaire') |>
    select(participant_id, response) |>
    jsontools::json_unnest_wider(col='response')
  questionnaire<- questionnaire|>rename(Participant='participant_id')
    
  # Info 
  info <- file[file$screen == "browser_info" & !is.na(file$screen), ]
  data <- data.frame(
    Participant = trials$participant_id,
    Age = as.numeric(jsonlite::fromJSON(dem[1])$age),
    Sex = jsonlite::fromJSON(dem[2])$sex,
    Sex_Orientation = jsonlite::fromJSON(dem[3])$sexual_orientation,
    Religion = jsonlite::fromJSON(dem[5])$religion,
    Religiosity = as.numeric(jsonlite::fromJSON(dem[7])$religiosity),
    ReligiousActivity = as.numeric(jsonlite::fromJSON(dem[7])$religious_activity),
    Education = jsonlite::fromJSON(dem[2])$education,
    Nationality = tools::toTitleCase(jsonlite::fromJSON(dem[1])$nationality),
    Ethnicity = tools::toTitleCase(jsonlite::fromJSON(dem[1])$ethnicity),
    Date = ifelse(is.null(info$date), NA, info$date),
    Time = ifelse(is.null(info$time), NA, info$time),
    Duration = as.numeric(file[file$screen == "end_screen", "time_elapsed"]) / 1000 / 60,
    Screen_Resolution = paste0(info$screen_width, "x", info$screen_height),
    Screen_Size = (as.numeric(info$screen_width) / 1000) * (as.numeric(info$screen_height) / 1000),
    Screen_Refresh = info$vsync_rate,
    Browser = info$browser,
    Browser_Version = info$browser_version,
    Device = ifelse(info$mobile == TRUE, "Mobile", "Desktop"),
    Device_OS = info$os,
    Trial = as.numeric(trials$trial_number),
    Stimulus = gsub(".jgp", "", gsub("stimuli/AMFD/", "", trials$stimulus)),
    RT = as.numeric(response$rt)
  )
  
  # Psychometric Scales 
  # IPIP
  ipip6 <-unnest('IPIP6')|>
    pivot_wider(names_from='index', values_from='response')
  ipip6[grepl("_R", names(ipip6))] <- 100 - ipip6[grepl("_R", names(ipip6))]
  data$Extraversion <- rowMeans(ipip6[grepl("Extraversion", names(ipip6))])
  data$Conscientiousness <- rowMeans(ipip6[grepl("Conscientiousness", names(ipip6))])
  data$Neuroticism <- rowMeans(ipip6[grepl("Neuroticism", names(ipip6))])
  data$Openness <- rowMeans(ipip6[grepl("Openness", names(ipip6))])
  data$HonestyHumility <- rowMeans(ipip6[grepl("HonestyHumility", names(ipip6))])
  data$Agreeableness <- rowMeans(ipip6[grepl("Agreeableness", names(ipip6))])
 
  #SIAS
  sias<-unnest('SIAS') 
  attention_check<- sias[sias$index=='Attention_Check_1',]
  attention_check<- attention_check |>
    pivot_wider(names_from='index', values_from='response')
  data$Attention_Check1<- attention_check$Attention_Check_1
  
  sias <-sias|>
    filter(index!='Attention_Check_1')|>
    pivot_wider(names_from='index', values_from='response')
  data$SIAS_Mean <-rowMeans(sias[grepl("SIAS", names(sias))])
  
  #SPS
  sps<-unnest('SPS')|>
    pivot_wider(names_from='index', values_from='response')
  data$SPS_Mean<- rowMeans(sps[grepl("Social_Phobia", names(sps))])
             
  #GAAIS
  gaais<-unnest('GAAIS')|>
    pivot_wider(names_from='index', values_from='response')
  gaais[grepl("_R", names(gaais))] <- 100 - gaais[grepl("_R", names(gaais))]
  data$GAAIS <-rowMeans(gaais[grepl("GAAIS", names(gaais))])

  #FFNI
  ffni<-unnest('FFNI-BF') 
  attention_check<- ffni[ffni$index=='Attention_Check_2',]
  attention_check<- attention_check |>
    pivot_wider(names_from='index', values_from='response')
  data$Attention_Check2<- attention_check$Attention_Check_2
  
  ffni<- ffni|>
    filter(index!='Attention_Check_2') |>
    pivot_wider(names_from='index', values_from='response')
  data$AcclaimSeeking <- rowMeans(ffni[grepl("Acclaim", names(ffni))])
  data$Arrogance <- rowMeans(ffni[grepl("Arrogance", names(ffni))])
  data$Authoritativeness <- rowMeans(ffni[grepl("Authoritativeness", names(ffni))])
  data$Distrust <- rowMeans(ffni[grepl("Distrust", names(ffni))])
  data$Entitlement <- rowMeans(ffni[grepl("Entitlement", names(ffni))])
  data$Exhibitionism <- rowMeans(ffni[grepl("Exhibitionism", names(ffni))])
  data$Exploitativeness <- rowMeans(ffni[grepl("Exploitativeness", names(ffni))])
  data$GrandioseFantasies <- rowMeans(ffni[grepl("Grandiose", names(ffni))])
  data$Indifference <- rowMeans(ffni[grepl("Indifference", names(ffni))])
  data$LackofEmpathy <- rowMeans(ffni[grepl("Lack", names(ffni))])
  data$Manipulativeness <- rowMeans(ffni[grepl("Manipulativeness", names(ffni))])
  data$NeedforAdmiration <- rowMeans(ffni[grepl("Need", names(ffni))])
  data$ReactiveAnger <- rowMeans(ffni[grepl("Reactive", names(ffni))])
  data$Shame <- rowMeans(ffni[grepl("Shame", names(ffni))])
  data$ThrillSeeking <- rowMeans(ffni[grepl("Thrill", names(ffni))])

  #GPTS
  gpts<-unnest('GPTS')|>
    pivot_wider(names_from=index, values_from=response)
  data$GPTS_Reference <-rowMeans(gpts[grepl("Reference", names(gpts))])
  data$GPTS_Persecution <-rowMeans(gpts[grepl("Persecution", names(gpts))])
  
  #SCC
  remove<- c('self_rated_general_attractiveness', 
            'self_rated_physical_attractiveness', 
            'Attention_Check_3')
  scc<-unnest('SCC')
  
  attention_check<- scc[scc$index=='Attention_Check_3',]
  attention_check<- attention_check |>
    pivot_wider(names_from='index', values_from='response')
  data$Attention_Check3<- attention_check$Attention_Check_3
  
  self_attractiveness<-scc[scc$index=='self_rated_general_attractiveness',]
  self_attractiveness<- self_attractiveness|>
    pivot_wider(names_from = 'index', values_from='response')
  data$self_attractiveness <- self_attractiveness$self_rated_general_attractiveness
  
  self_phy_attractiveness<-scc[scc$index=='self_rated_physical_attractiveness',]
  self_phy_attractiveness<- self_phy_attractiveness|>
    pivot_wider(names_from = 'index', values_from='response')
  data$self_phy_attractiveness <- self_phy_attractiveness$self_rated_physical_attractiveness
  
  scc<-scc[!grepl(paste(remove, collapse='|'), scc$index),]|>
    pivot_wider(names_from='index', values_from='response')
  scc[grepl("_R", names(scc))] <- 100 - scc[grepl("_R", names(scc))]
  data$SCC <- rowMeans(scc[grepl("SCC", names(scc))])
  
  #IUS
  ius<-unnest('IUS')|>
    pivot_wider(names_from=index, values_from=response)
  data$IUS_ProspectiveAnxiety <-rowMeans(ius[grepl("Prospective", names(ius))])
  data$IUS_InhibitoryAnxiety <-rowMeans(ius[grepl("Inhibitory", names(ius))])
  
  data_total<- merge(data, questionnaire, by='Participant')
  data_total
}

# This is a local folder containing raw data from unzipped pavlovia
# It has been added to .gitignore to NOT be published on github
# (it contains the subject ID of the participants)
participants <- list.files("data/raw_data/")

df <- data.frame()
for (ppt in participants) {
  df <- rbind(df, preprocess_raw(file = paste0("data/raw_data/", ppt)))
  
}

write.csv(df, "data/data.csv", row.names = FALSE)
