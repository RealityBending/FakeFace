import numpy as np
import pandas as pd

data = {
    "stimulus": ["stimuli/blue.png", "stimuli/orange.png"],
    "object": "stimulus",
    "correct_key": ["leftarrow", "rightarrow"],
    "correct_button": ["<-", "->"]
 }

df = pd.DataFrame.from_dict(data)

df.to_json("stimuli/stimuli.json")
