import Vue from 'vue'
import App from './App.vue'

const comps = {
    App
}

Object.keys(comps).forEach(name => {
    Vue.component(name, comps[name])
})

export default comps