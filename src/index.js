import Vue from 'vue'
import Banner from './App.vue'
import AnotherBanner from './Test.vue'

const comps = {
    Banner,
    AnotherBanner
}

Object.keys(comps).forEach(name => {
    Vue.component(name, comps[name])
})

export default comps