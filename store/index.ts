import CreatePersistedState from 'vuex-persistedstate'
import secureLS from 'secure-ls'

const ls = new secureLS({ isCompression: true})

export const state = () => ({

})

const indexState = CreatePersistedState({

    key: '!243d#!@q3lkn',

    paths: [
        'chat.chatRoom'
    ],

    storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
    }
})

export const plugins = [
    indexState
]