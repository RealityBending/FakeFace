preprocess_raw <- function(file) {
  file <- read.csv(file)

  # Internal Utilities
  # unnest <- function(scale){
  #   data <- file |>
  #     filter(screen == scale) |>
  #     select(participant_id, response) |>
  #     jsontools::json_unnest_longer(col='response', indices_to = 'index')
  #   data
  # }
  
  unnest <- function(scale){
    data <- file |>
      filter(screen == scale) |>
      select(participant_id, response) |>
      jsontools::json_unnest_wider(col='response')
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
  questionnaire<- unnest('questionnaire')
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
  ipip6 <-unnest('IPIP6')
  ipip6[grepl("_R", names(ipip6))] <- 100 - ipip6[grepl("_R", names(ipip6))]
  data$Extraversion <- rowMeans(ipip6[grepl("Extraversion", names(ipip6))])
  data$Conscientiousness <- rowMeans(ipip6[grepl("Conscientiousness", names(ipip6))])
  data$Neuroticism <- rowMeans(ipip6[grepl("Neuroticism", names(ipip6))])
  data$Openness <- rowMeans(ipip6[grepl("Openness", names(ipip6))])
  data$HonestyHumility <- rowMeans(ipip6[grepl("HonestyHumility", names(ipip6))])
  data$Agreeableness <- rowMeans(ipip6[grepl("Agreeableness", names(ipip6))])

  # SIAS + Attention Check 1
  sias<-unnest('SIAS')
  attention_check1 <- sias$Attention_Check_1
  data$Attention_Check1<- attention_check1

  sias <-sias[,!colnames(sias)%in%c('Attention_Check_1')]
  data$SIAS_Mean <-rowMeans(sias[grepl("SIAS", names(sias))])

  # SPS
  sps<-unnest('SPS')
  data$SPS_Mean<- rowMeans(sps[grepl("Social_Phobia", names(sps))])

  # GAAIS
  gaais<-unnest('GAAIS')
  gaais[grepl("_R", names(gaais))] <- 100 - gaais[grepl("_R", names(gaais))]
  data$GAAIS <-rowMeans(gaais[grepl("GAAIS", names(gaais))])

  # FFNI + Attention Check 2
  ffni<-unnest('FFNI-BF')
  attention_check2<- ffni$Attention_Check_2
  data$Attention_Check2<- attention_check2

  ffni<- ffni[,!colnames(ffni)%in%c('Attention_Check_2')]
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

  # GPTS
  gpts<-unnest('GPTS')
  data$GPTS_Reference <-rowMeans(gpts[grepl("Reference", names(gpts))])
  data$GPTS_Persecution <-rowMeans(gpts[grepl("Persecution", names(gpts))])

  # SCC + Attention Check 3
  remove<- c('self_rated_general_attractiveness',
            'self_rated_physical_attractiveness',
            'Attention_Check_3')
  scc<-unnest('SCC')

  attention_check3<- scc$Attention_Check_3
  data$Attention_Check3<- attention_check3

  self_attractiveness<-scc$self_rated_general_attractiveness
  data$self_attractiveness <- self_attractiveness

  self_phy_attractiveness<-scc$self_rated_physical_attractiveness
  data$self_phy_attractiveness <- self_phy_attractiveness

  scc<-scc[,!colnames(scc)%in% remove]
  scc[grepl("_R", names(scc))] <- 100 - scc[grepl("_R", names(scc))]
  data$SCC <- rowMeans(scc[grepl("SCC", names(scc))])

  # IUS
  ius<-unnest('IUS')
  data$IUS_ProspectiveAnxiety <-rowMeans(ius[grepl("Prospective", names(ius))])
  data$IUS_InhibitoryAnxiety <-rowMeans(ius[grepl("Inhibitory", names(ius))])

  data_total<- cbind(data, questionnaire[,!colnames(questionnaire)%in%c('Participant')])
  
  # Combine with Norms data 
  norms<- read.csv('experiment/stimuli/AMFD_norms.csv')
  nf_norms<-norms[norms$FType==0,]
  nf_norms$PhotoID<-ifelse(nf_norms$Gender_cat==1, paste0('NF-', paste0(nf_norms$PhotoID, '.jpg')), paste0('NM-', paste0(nf_norms$PhotoID, '.jpg')))
  nf_norms <- nf_norms|>rename(Stimulus='PhotoID')
  
  data_total<-merge.data.frame(data_total, nf_norms, by='Stimulus')
  data_total
}

# This is a local folder containing raw data from unzipped pavlovia
# It has been added to .gitignore to NOT be published on github
# (it contains the subject ID of the participants)
participants <- list.files("data/rawdata/")

df <- data.frame()
for (ppt in participants) {
  df <- rbind(df, preprocess_raw(file = paste0("data/rawdata/", ppt)))

}


write.csv(df, "data/data.csv", row.names = FALSE)

