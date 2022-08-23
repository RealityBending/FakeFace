import json
import os

# Ensure CWD is Dropbox path
path = os.getcwd()
folder = os.listdir(path + "/AMFD/")

# Get names of all all stimuli images in array
image_dir = []
for file in folder:
    if file.startswith("NF") or file.startswith("NM"):
        image_dir.append({"stimulus": "stimuli/AMFD/" + file})


# Save the array to a json file called images.js
with open("stimuli.js", "w") as fp:
    json.dump(image_dir, fp)

# Update the file so that array is named images
with open("stimuli.js") as f:
    updatedfile = "var stimuli = " + f.read()
with open("stimuli.js", "w") as f:
    f.write(updatedfile)
