import json

audio_file_links = [
    "https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/5.0/Heartbeat.mov",
    "https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/5.0/Hey.mov",
    # ... (all other links)
    "https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/5.0/Boxing.Bell.mov"
]

# Generate the desired JSON structure
json_data = [{"id": i+1, "title": "", "audioFile": link} for i, link in enumerate(audio_file_links)]

# Save the JSON data to a file
with open('output.json', 'w') as json_file:
    json.dump(json_data, json_file, indent=2)

print("JSON file created successfully.")
