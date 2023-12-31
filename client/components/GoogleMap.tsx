import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

const API_KEY = "AIzaSyCCp3PZbQL7z91AFeqhduIvlUmSsG9gLis"

const image = '/images/contact/cat_marker.webp' as string


const GoogleMap = () => {
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        zoom={20}
        center={{ lat: -43.59657287597656, lng: 172.382934570312 }}
      >
        <Marker
          position={{ lat: -43.59657287597656, lng: 172.382934570312 }}
          label="Rolly Animal Shelter"
          icon={image}
        />
      </Map>
    </APIProvider>
  )
}
export default GoogleMap
