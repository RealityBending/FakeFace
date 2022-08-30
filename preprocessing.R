unnest <- function(file, scale) {
  data <- file |>
    dplyr::filter(screen == scale) |>
    dplyr::select(participant_id, response) |>
    jsontools::json_unnest_wider(col = "response")
  data
}

preprocess_raw <- function(file) {

  data <- read.csv(file)

  # Preprocess
  if (!"end_screen" %in% data$screen) {
    print(paste0("Warning: Incomplete data for ", file))
    return(data.frame())
  }

  # Demographics
  dem <- data[data$screen == "demographics" & !is.na(data$screen), "response"]

  # Trials
  trials <- data[data$screen == "stimuli", ]
  answers <- unnest(data, "questionnaire")

  # Info
  info <- data[data$screen == "browser_info" & !is.na(data$screen), ]

  df <- data.frame(
    Participant = trials$participant_id,
    Age = as.numeric(jsonlite::fromJSON(dem[1])$age),
    Sex = jsonlite::fromJSON(dem[2])$sex,
    Sexual_Orientation = jsonlite::fromJSON(dem[3])$sexual_orientation,
    Religion = jsonlite::fromJSON(dem[5])$religion,
    Religion_Spirituality = as.numeric(jsonlite::fromJSON(dem[7])$religiosity),
    Religion_Activity = as.numeric(jsonlite::fromJSON(dem[7])$religious_activity),
    Education = jsonlite::fromJSON(dem[2])$education,
    Nationality = tools::toTitleCase(jsonlite::fromJSON(dem[1])$nationality),
    Ethnicity = tools::toTitleCase(jsonlite::fromJSON(dem[1])$ethnicity),
    Date = ifelse(is.null(info$date), NA, info$date),
    Time = ifelse(is.null(info$time), NA, info$time),
    Duration_Questionnaires = sum(as.numeric(data[data$screen %in% c('IUS', 'IPIP6', 'SIAS', 'SPS', 'GAAIS', 'FFNI-BF', 'GPTS', 'SCC'), 'rt'])) / 1000 / 60,
    Duration_Task = sum(as.numeric(data[data$screen == "questionnaire", "rt"])) / 1000 / 60,
    Screen_Resolution = paste0(info$screen_width, "x", info$screen_height),
    Screen_Size = (as.numeric(info$screen_width) / 1000) * (as.numeric(info$screen_height) / 1000),
    Screen_Refresh = info$vsync_rate,
    Browser = info$browser,
    Browser_Version = info$browser_version,
    Device = ifelse(info$mobile == TRUE, "Mobile", "Desktop"),
    Device_OS = info$os,
    Trial = as.numeric(trials$trial_number),
    Stimulus = gsub(".jgp", "", gsub("stimuli/AMFD/", "", trials$stimulus)),
    RT = as.numeric(data[data$screen == "questionnaire", "rt"]),
    SimulationMonitoring = datawizard::change_scale(answers$perceived_realness, to = c(-1, 1), range = c(0, 100)),
    Real = datawizard::change_scale(answers$perceived_realness, to = c(0.0001, 0.9999), range = c(0, 100)),
    Attractive = datawizard::change_scale(answers$Attractiveness, to = c(0.0001, 0.9999), range = c(0, 100)),
    Approachable = datawizard::change_scale(answers$Approachability, to = c(0.0001, 0.9999), range = c(0, 100)),
    Trustworthy = datawizard::change_scale(answers$Trustworthiness, to = c(0.0001, 0.9999), range = c(0, 100)),
    Familiar = datawizard::change_scale(answers$Familiarity, to = c(0.0001, 0.9999), range = c(0, 100)),
    Similar = datawizard::change_scale(answers$Similarity, to = c(0.0001, 0.9999), range = c(0, 100))
  )

  # Format sexual orientation
  df$Sexual_Orientation <- ifelse(df$Sexual_Orientation == "Other", jsonlite::fromJSON(dem[4])$sexual_orientation, df$Sexual_Orientation)

  # Format education
  df$Education <- gsub("University (", "", df$Education, fixed = TRUE)
  df$Education <- gsub(")", "", df$Education, fixed = TRUE)
  df$Education <- tools::toTitleCase(df$Education)

  # Standardize demographics
  # unique(df$Ethnicity)
  df$Ethnicity <- ifelse(df$Ethnicity %in% c("Latin", "Hisapanic"), "Latino", df$Ethnicity)

  # Add info related to stimulus
  df$Stimulus_Sex <- ifelse(str_detect(df$Stimulus, "NF"), "Female", "Male")
  df$Stimulus_SameSex <- ifelse(df$Sex == df$Stimulus_Sex, "Same", "Opposite")

  # Psychometric Scales
  # IPIP
  ipip6 <- unnest(data, "IPIP6")
  ipip6[grepl("_R", names(ipip6))] <- 100 - ipip6[grepl("_R", names(ipip6))]
  df$IPIP6_Extraversion <- rowMeans(ipip6[grepl("Extraversion", names(ipip6))])
  df$IPIP6_Conscientiousness <- rowMeans(ipip6[grepl("Conscientiousness", names(ipip6))])
  df$IPIP6_Neuroticism <- rowMeans(ipip6[grepl("Neuroticism", names(ipip6))])
  df$IPIP6_Openness <- rowMeans(ipip6[grepl("Openness", names(ipip6))])
  df$IPIP6_HonestyHumility <- rowMeans(ipip6[grepl("HonestyHumility", names(ipip6))])
  df$IPIP6_Agreeableness <- rowMeans(ipip6[grepl("Agreeableness", names(ipip6))])


  # SIAS + Attention Check 1
  sias <- unnest(data, "SIAS")
  df$Social_Anxiety <- rowMeans(sias[grepl("SIAS", names(sias))])

  # SPS
  sps <- unnest(data, "SPS")
  df$Social_Phobia <- rowMeans(sps[grepl("Social_Phobia", names(sps))])


  # GAAIS
  gaais <- unnest(data, "GAAIS")
  gaais[grepl("_R", names(gaais))] <- 100 - gaais[grepl("_R", names(gaais))]
  df$AI_1_RealisticImages <- gaais$GAAIS_1
  df$AI_2_Unethical <- gaais$GAAIS_2
  df$AI_3_VideosReal <- gaais$GAAIS_3
  df$AI_4_DailyLife <- gaais$GAAIS_4
  df$AI_5_ImitatingReality <- gaais$GAAIS_5
  df$AI_6_Dangerous <- gaais$GAAIS_6
  df$AI_7_RealisticVideos <- gaais$GAAIS_7
  df$AI_8_Exciting <- gaais$GAAIS_8
  df$AI_9_Applications <- gaais$GAAIS_9
  df$AI_10_FaceErrors <- gaais$GAAIS_10




  # FFNI + Attention Check 2
  ffni <- unnest(data, "FFNI-BF")
  df$FFNI_AcclaimSeeking <- rowMeans(ffni[grepl("Acclaim", names(ffni))])
  df$FFNI_Arrogance <- rowMeans(ffni[grepl("Arrogance", names(ffni))])
  df$FFNI_Authoritativeness <- rowMeans(ffni[grepl("Authoritativeness", names(ffni))])
  df$FFNI_Distrust <- rowMeans(ffni[grepl("Distrust", names(ffni))])
  df$FFNI_Entitlement <- rowMeans(ffni[grepl("Entitlement", names(ffni))])
  df$FFNI_Exhibitionism <- rowMeans(ffni[grepl("Exhibitionism", names(ffni))])
  df$FFNI_Exploitativeness <- rowMeans(ffni[grepl("Exploitativeness", names(ffni))])
  df$FFNI_GrandioseFantasies <- rowMeans(ffni[grepl("Grandiose", names(ffni))])
  df$FFNI_Indifference <- rowMeans(ffni[grepl("Indifference", names(ffni))])
  df$FFNI_LackOfEmpathy <- rowMeans(ffni[grepl("Lack", names(ffni))])
  df$FFNI_Manipulativeness <- rowMeans(ffni[grepl("Manipulativeness", names(ffni))])
  df$FFNI_NeedForAdmiration <- rowMeans(ffni[grepl("Need", names(ffni))])
  df$FFNI_ReactiveAnger <- rowMeans(ffni[grepl("Reactive", names(ffni))])
  df$FFNI_Shame <- rowMeans(ffni[grepl("Shame", names(ffni))])
  df$FFNI_ThrillSeeking <- rowMeans(ffni[grepl("Thrill", names(ffni))])



  # GPTS
  gpts <- unnest(data, "GPTS")
  df$GPTS_Reference <- rowMeans(gpts[grepl("Reference", names(gpts))])
  df$GPTS_Persecution <- rowMeans(gpts[grepl("Persecution", names(gpts))])


  # SCC + Attention Check 3
  scc <- unnest(data, "SCC")
  scc[grepl("_R", names(scc))] <- 100 - scc[grepl("_R", names(scc))]
  df$SelfConceptClarity <- rowMeans(scc[grepl("SCC", names(scc))])

  df$SelfAttractiveness1 <- scc$self_rated_general_attractiveness
  df$SelfAttractiveness2 <- scc$self_rated_physical_attractiveness


  # IUS
  ius <- unnest(data, "IUS")
  df$IUS_ProspectiveAnxiety <- rowMeans(ius[grepl("Prospective", names(ius))])
  df$IUS_InhibitoryAnxiety <- rowMeans(ius[grepl("Inhibitory", names(ius))])


  # Attention checks
  df$Attention_Check1 <- sias$Attention_Check_1
  df$Attention_Check2 <- ffni$Attention_Check_2
  df$Attention_Check3 <- 100 - scc$Attention_Check_3  # Reversed


  # Combine with Norms data
  norms <- read.csv("experiment/stimuli/AMFD_norms.csv")
  norms <- norms[norms$FType == 0, ]  # No smiling
  norms <- data.frame(
    Stimulus = ifelse(norms$Gender_cat == 1, paste0("NF-", paste0(norms$PhotoID, ".jpg")), paste0("NM-", paste0(norms$PhotoID, ".jpg"))),
    Norms_Dominant = norms$Dominant_mean,
    Norms_Trustworthy = norms$Trust_mean,
    Norms_Smart = norms$Smart_mean,
    Norms_Warm = norms$Warm_mean,
    Norms_Attractive = norms$Attract_mean
  )

  merge(df, norms, by = "Stimulus")
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
