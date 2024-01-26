<script>
// import "../../../assets/css/login.css";
import Echo from "laravel-echo";
import { mapGetters, mapActions } from "vuex";
export default {
	components: {},
	data() {
		return {
			data: [],
			is_active: null,
			get_data: [],
			chat_box: {
				title: null,
				gc_title: null,
				receive_by: null,
				created_by: null,
				members: null,
				active: null,
				is_gc: null,
			},
			open_chat: [],
			data_contacts: [],
			arrayContacts: [],
			message: null,
			toggle: false,
			contactsModal: false,
			replyModal: false,
		};
	},
	computed: {
		...mapGetters("auth", ["profile"]),
	},
	methods: {
		...mapActions("chat", {
			getChatList: "chatList",
			getOpenChat: "openChat",
			postSendMessage: "sendMessage",
			getContacts: "contacts",
			startMessage: "newChat",
			chatDeleter: "deleteChat",
		}),
		async initChatList() {
			const data = await this.getChatList();
			this.data = data;
			this.scrollToElement({ behavior: "smooth" });
		},
		async initContactsList() {
			const data = await this.getContacts();
			this.data_contacts = data;
		},
		async triggerChat(data) {
			this.is_active = data.id;
			this.chat_box.title = data.created_by;
			this.chat_box.username = data.username;
			this.chat_box.receive_by = data.receive_by;
			var pl = {
				chat_id: data.id,
			};
			const chat_data = await this.getOpenChat(pl);
			this.open_chat = chat_data;

			this.webSocket();
		},
		async send() {
			var pl = {
				chat_id: this.is_active,
				message: this.message,
			};
			await this.postSendMessage(pl);
				this.scrollToElement({ behavior: "smooth" });
			// await this.open_chat.push(pl);
			this.message = "";
		},
		modalTrigger() {
			this.contactsModal = true;
		},
		toggleMenu() {
			if (this.toggle == false) {
				document.getElementById("menu").style.width = "16%";
				document.getElementById("close-button").style.display = "block";
				document.getElementById("details").style.display = "block";
				document.getElementById("contacts").style.display = "block";
				this.toggle = true;
			} else {
				document.getElementById("menu").style.width = "0";
				document.getElementById("close-button").style.display = "none";
				document.getElementById("details").style.display = "none";
				document.getElementById("contacts").style.display = "none";
				this.toggle = false;
			}
		},
		async createChat() {
			var pl = {
				message: "Hello guys!",
				receiver_id: this.arrayContacts,
			};
			await this.startMessage(pl);
		},
		async deleteChatFromList() {
			var pl = {
				chat_id: 7
			};
			await this.chatDeleter(pl);
		},
		scrollToElement(options) {
			console.log("scroll");
			const el = document.getElementById("scroll-to");
			if (el) {
				el.scrollIntoView(options);
			}
		},
		replyClick(data){
			// alert(data.sender_username);
			console.log(data.id)
			if(this.replyModal == true){
				this.replyModal = false;
			}else{
				this.replyModal = true;
			}
		},
		webSocket() {
			window.Pusher = require("pusher-js");
			window.Echo = new Echo({
				broadcaster: "pusher",
				key: process.env.VUE_APP_PUSHER_APP_KEY_CHAT,
				wsHost: process.env.VUE_APP_PUSHER_HOST_CHAT,
				wsPort: process.env.VUE_APP_PUSHER_PORT_CHAT,
				forceTLS: false,
				disableStats: true,
				cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER_CHAT,
				enabledTransports: ["ws", "wss"],
			});
			window.Echo.channel(`Chat.${this.is_active}`).listen(
				"SendMessage",
				async (e) => {
					console.log(e);
					var pl = {
						chat_id: e.chat_id,
						message: e.message,
						sender_id: e.sender_id,
						sender_username: e.sender_username,
					};
					await this.open_chat.push(pl);
					this.scrollToElement({ behavior: "smooth" });
				}
			);
		},
	},
	mounted() {
		this.initChatList();
		this.initContactsList();
		// this.deleteChatFromList();
		console.log(this.profile)
	},
};
</script>

<template>
	<Layout>
		<div class="main-container d-flex">
			<div class="left-container">
				<div class="top-bar p-2 d-flex">
					<div
						class="menu mx-2 p-2"
						@click="toggleMenu()"
						style="cursor: pointer"
					>
						|||
					</div>
					<div class="search-bar">
						<input
							placeholder="Search"
							class="form-control search"
						/>
					</div>
				</div>
				<div class="chats">
					<div class="p-1 mx-2">
						<tr
							@click="triggerChat(data)"
							class="d-flex button-chats mt-0 mb-0"
							style="cursor: pointer"
							:class="`${
								this.is_active == data.id ? 'bg-light' : ''
							}`"
							v-for="(data, index) in this.data"
							:key="index"
						>
							<div class="image p-1 m-2"></div>
							<div class="chat p-1 m-2">
								<h6>
									{{
										data.receive_by.includes(",")
											? data.receive_by
											: data.receive_by === profile.username
											? data.created_by
											: data.receive_by
									}}
								</h6>
								<p>
									<span class="text-info"
										>{{ data.latest_message ? data.latest_message.message : '' }}
									</span>
								</p>
							</div>
							<!-- <div
								class="chat p-1 m-2"
								v-if="this.profile.username != data.receive_by"
							>
								<h6>{{ data.receive_by }}</h6>
								<p>
								</p>
							</div> -->
						</tr>
					</div>
				</div>
			</div>
			<div class="right-container">
				<div class="chat-box">
					<div class="title">
						<h5
							class="mt-3 mx-3 mb-0"
							v-if="this.profile.username != this.chat_box.title"
						>
							{{ this.chat_box.title }}
						</h5>
						<h5
							class="mt-3 mx-3 mb-0"
							v-else-if="
								this.profile.username !=
								this.chat_box.receive_by
							"
						>
							{{ this.chat_box.receive_by }}
						</h5>
						<span class="mx-3"> Last seen just now</span>
					</div>
					<button
						class="add-to-contacts"
						style="color: #44b3cf; text-transform: uppercase"
						v-if="this.profile.username != this.chat_box.title"
					>
						ADD {{ this.chat_box.title }} CONTACTS
					</button>
					<div class="chat-container col-10">
						<div
							class="message-thread"
							:class="
								data.sender_id == this.profile.id
									? 'text-end'
									: 'text-start'
							"
							v-for="(data, index) in open_chat"
							:key="index"
						>
							<span
								@contextmenu.prevent="replyClick(data)"
								class="message"
								id="reply"
								:class="
									data.sender_id == this.profile.id
										? 'bg-info text-white'
										: 'bg-light'
								"
							>
								{{ data.sender_username +':' +data.message }}
								<div id="reply-modal" :style="replyModal == true ? 'display:block' : 'display:none'"></div>
								</span
							>
						</div>
						<div id="scroll-to"></div>
					</div>

					<div class="message-input">
						<input
							class="form-control"
							placeholder="Enter a message"
							@keyup.enter="send()"
							v-model="message"
						/>
					</div>
				</div>
			</div>
			<!-- MENU MODAL -->
			<div id="menu" class="modal-menu">
				<div>
					<i
						class="mdi mdi-close-box"
						@click="toggleMenu()"
						style="cursor: pointer"
						id="close-button"
					></i>
				</div>
				<div class="d-flex">
					<div class="profile-pic m-3"></div>
					<label id="details" class="mt-4"
						><span class="text-info">User: </span
						>{{ this.profile.username }}
					</label>
				</div>
				<hr />
				<div class="col-12">
					<button id="contacts" @click="modalTrigger()">
						Contacts
					</button>
				</div>
			</div>
			<b-modal
				centered
				v-model="contactsModal"
				title="Contacts List"
				title-class="text-black font-18"
				body-class=""
				hide-footer
			>
				<div
					class=""
					v-for="(data, index) in this.data_contacts"
					:key="index"
				>
					<div class="d-flex">
						<b-form-checkbox
							:value="data.id"
							v-model="arrayContacts"
							class="mt-3"
						>
							<div class="d-flex">
								<div class="profile-pic mx-1"></div>
								<span class="mt-3 mx-4">{{
									data.username
								}}</span>
							</div>
						</b-form-checkbox>
					</div>
				</div>
				<hr />
				<button @click="createChat()" class="btn btn-info">
					CREATE CHAT
				</button>
			</b-modal>
		</div>
	</Layout>
</template>
<style scoped>
#reply-modal{
	height: 100px;
	width:60px;
	background: red;
	display: none;

}
#contacts {
	background: transparent;
	border: none;
	display: none;
	width: 100%;
	height: 40px;
}
#contacts:hover {
	background: rgb(250, 250, 250);
}
.profile-pic {
	height: 50px;
	width: 50px;
	border-radius: 100%;
	background: rgb(66, 60, 60);
}
.modal-menu {
	position: absolute;
	height: 100vh;
	width: 0;
	background: rgb(255, 255, 255);
}
#close-button {
	display: none;
	float: right;
	font-size: 25px;
}
#details {
	display: none;
}
.chats {
	margin-top: 60px;
}

.message {
	/* background-color: #1a1a1a; */
	width: auto;
	padding: 0.7rem;
	border-radius: 25px;
	margin-bottom: 1rem;
	/* background: white; */
	position: relative;
	bottom: 0;
}
.message-thread {
	padding: 0.7rem;
	border-radius: 25px;
	margin-bottom: 1rem;
	font-size: 16px;
}
.title {
	height: 60px;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 99;
	border-bottom: 1px solid rgb(236, 236, 236);
	background: white;
}
.add-to-contacts {
	height: 50px;
	width: 100%;
	position: relative;
	top: 60px;
	z-index: 99;
	border: none;
	background: white;
}
.chat-container {
	height: 800px;
	display: flex;
	position: fixed;
	bottom: 60px;
	overflow-y: scroll;
	flex-direction: column;
}
.chat-box {
	height: 600px;
	width: 100%;
}
.message-input > input {
	height: 50px;
	width: 100%;
	position: fixed;
	bottom: 0;
	border: none;
	background: white;
	padding-left: 50px;
}

.button-chats:hover {
	background-color: rgb(243, 240, 240);
}
.image {
	height: 50px;
	width: 50px;
	border-radius: 100%;
	background: rgb(66, 60, 60);
}
.search {
	border-radius: 30px;
}
.top-bar {
	height: 60px;
	position: fixed;
	width: 20%;
	background: white;
}
.main-container {
	height: 100vh;
	background-color: rgb(86, 238, 180);
}

.right-container {
	height: 100%;
	width: 100%;
}
/* left container */
.left-container {
	height: 100%;
	width: 20%;
	background-color: white;
	overflow-y: auto;
}
::-webkit-scrollbar {
	width: 4px;
}
/* Track */
::-webkit-scrollbar-track {
	background: #f1f1f1;
	width: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #888;
}
</style>