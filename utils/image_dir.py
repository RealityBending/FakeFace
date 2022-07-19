import json
import os

# Ensure CWD is Dropbox path
path = os.getcwd()
folder = os.listdir(path + '/Faces/')

# Get names of all all stimuli images in array
image_dir = []
for file in folder:
    image_dir.append({"stimulus": 'utils/Faces/' + file})


# Save the array to a json file called images.js
with open("images.js", "w") as fp:
    json.dump(image_dir, fp)

# Update the file so that array is named images
with open("images.js") as f:
    updatedfile = "var stimuli = " + f.read()
with open("images.js", "w") as f:
    f.write(updatedfile)
