const namespaced = true

const state = {
	show_sidebar: false
}

const mutations = {
	setShowSidebar: (state, payload) => {
		state.show_sidebar = payload
	}
}

export default {
	namespaced,
	state,
	mutations
}