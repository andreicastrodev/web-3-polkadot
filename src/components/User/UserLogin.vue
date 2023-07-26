<template>
  <div>
    <base-button v-if="!this.isLoggedIn" @click="login">Login</base-button>
    <base-button v-else @click="logout">Logout</base-button>
  </div>
</template>

<script>
import Web3Auth from "web3modal";
// import { CHAIN_NAMESPACES } from "@web3auth/base";
const CLIENT_ID =
  "BDrqTk0B213bGyM0mUeMaTz8mvbuW9bMsGhes4D94y5u3DFZ8Rpy33vcfSCx75f44SeqZQ1awmnZ4b8JXAhbKLM";
export default {
  data() {
    return {
      web3AuthState: null,
      provider: null,
      isLoggedIn: false,
    };
  },
  beforeMount() {
    this.initializeWeb3Auth();
  },
  created(){
    this.isLoggedIn = this.$store.getters["user/isLoggedIn"];
  },
  methods: {
    async initializeWeb3Auth() {
      console.log(this.isLoggedIn);
      // Initialize Web3Auth within your constructor
      const web3Auth = new Web3Auth({
        CLIENT_ID,
        chainConfig: {
          chainNamespace: "testnet",
          chainId: "0x5", // Please use 0x5 for Goerli Testnet
          rpcTarget: "https://rpc.ankr.com/eth",
        },
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["facebook", "google"],
          appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
        },
      });

      try {
        this.web3AuthState = web3Auth;
        this.provider = web3Auth.provider;
        // this.web3AuthState.toggleModal();
        console.log("Web3Auth connect successfully!");
        // Now the user can interact with the Ethereum wallet through Web3Auth
      } catch (error) {
        console.error("Failed to connect Web3Auth :", error);
      }
    },

    async logout() {
      try {
        this.web3AuthState.off();
        console.log("Web3Auth modal Logout successfully!");
        // Now the user can interact with the Ethereum wallet through Web3Auth
      } catch (error) {
        console.error("Failed to Logout Web3Auth modal:", error);
      }
    },

    async login() {
      if (!this.web3AuthState) {
        console.log("web3auth not initialized yet");
        return;
      }

      try {
        const web3authProvider = await this.web3AuthState.connect();
        this.provider = web3authProvider;
        this.$store.dispatch('user/loginUser');
        console.log(this.provider);
        console.log("Web3Auth modal login successfully!");
      } catch (error) {
        console.error("Failed to login Web3Auth :", error);
      }
    },
  },
};
</script>
