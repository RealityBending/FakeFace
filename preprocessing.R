preprocess_raw <- function(file) {
  data <- read.csv(file)
  # Preprocess
}


# This is a local folder containing raw data from unzipped pavlovia
# It has been added to .gitignore to NOT be published on github
# (it contains the subject ID of the participants)
participants <- list.files("data/rawdata/")

df <- data.frame()
for (ppt in participants) {
  df <- rbind(df, preprocess_raw(file = paste0("data/", ppt)))
}

write.csv(df, "data/data.csv", row.names = FALSE)
