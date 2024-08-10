import streamlit as st
import folium
from streamlit_folium import st_folium
from gdacs.api import GDACSAPIError, GDACSAPIReader

# Initialize the GDACS API client
client = GDACSAPIReader()


def fetch_events_with_coordinates(limit=10):
    try:
        # Fetch the latest events, limited by the specified number
        events = client.latest_events(limit=limit)
        return [event for event in events if 'geometry' in event]
    except GDACSAPIError as error:
        st.error(f"Error fetching events: {error}")
        return []


# Sidebar to select the number of events to display
num_events = st.sidebar.slider(
    "Number of Events", min_value=1, max_value=20, value=10)

# Fetch recent events
events = fetch_events_with_coordinates(limit=num_events)

# Initialize a folium map centered at an approximate global center
m = folium.Map(location=[0, 0], zoom_start=2)

# Define marker colors for different event types
event_type_colors = {
    'TC': 'blue',   # Tropical Cyclone
    'FL': 'green',  # Flood
    'DR': 'orange',  # Drought
    'EQ': 'red'     # Earthquake
}

# Add events to the map
for event in events:
    latitude = event['geometry']['coordinates'][1]
    longitude = event['geometry']['coordinates'][0]
    event_type = event.get('eventtype', 'Unknown')
    event_name = event.get('eventname', 'Unknown Event')
    severity = event.get('severity', 'N/A')
    event_date = event.get('fromdate', 'Unknown Date')

    # Create a popup message
    popup_text = (f"Event: {event_name}<br>"
                  f"Type: {event_type}<br>"
                  f"Severity: {severity}<br>"
                  f"Date: {event_date}")

    # Determine marker color based on event type
    color = event_type_colors.get(event_type, 'gray')

    # Add a marker to the map
    folium.Marker(
        location=[latitude, longitude],
        popup=folium.Popup(popup_text, max_width=300),
        icon=folium.Icon(color=color, icon='info-sign')
    ).add_to(m)

# Display the map using Streamlit's st_folium
st_folium(m, width=725, height=500)
