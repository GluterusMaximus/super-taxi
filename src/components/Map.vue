<script setup lang="ts">
import { ref } from 'vue'
import { mapStyles } from '@/constants/mapStyles'

interface Geolocation { lat: number, lng: number }
interface Place { geometry: { location: { lat: () => number, lng: () => number } } }

const DEFAULT_CENTER = { lat: 50.4504, lng: 30.5245 }

const center = ref<Geolocation | null>(DEFAULT_CENTER)
const start = ref<Geolocation | null>(null)
const destination = ref<Geolocation | null>(null)

navigator.geolocation.getCurrentPosition((position) => {
  center.value = { lat: position.coords.latitude, lng: position.coords.longitude }
}, (error) => {
  console.error(error)
}, { enableHighAccuracy: true })

function setStart(place: Place) {
  start.value = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
}

function setDestination(place: Place) {
  destination.value = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }
}
</script>

<template>
  <GMapMap
    :center="center"
    :zoom="10"
    map-type-id="roadmap"
    style="width: 500px; height: 300px"
    :options="{ styles: mapStyles, disableDefaultUI: true }"
  >
    <GMapMarker
      :position="start"
      :clickable="true"
    />
    <GMapMarker
      :position="destination"
      :clickable="true"
    />
  </GMapMap>
  <GMapAutocomplete
    placeholder="Choose your starting location"
    @place_changed="setStart"
  />
  <GMapAutocomplete
    placeholder="Choose your destination"
    @place_changed="setDestination"
  />
</template>
