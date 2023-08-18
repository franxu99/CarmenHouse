import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
  } from 'react-leaflet'

  import 'leaflet/dist/leaflet.css'


function Ubication(){
    return (
    <div className='h-[40rem] w-1/2 '>
        <h1 className='font-semibold text-4xl text-center'>Ubicación</h1>
        <div className='h-[100%] w-[100%] mt-10 flex justify-center'>
            <MapContainer center={[37.9101, -3.66278]} zoom={14} scrollWheelZoom={false} className='h-[70%] w-[50%] rounded-lg'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={[37.9098, -3.6616]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
  )
}

export default Ubication