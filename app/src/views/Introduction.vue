 <template>
  <div class="introduction">
   <h2>  <p><b>OnChainDNA</b> is a  project built on the Avalanche X-chain to transact exchange of personal DNA sequence information associated with specific diseases in small  enough amounts to be remain unidentifiable individually but large enough to be valuable to researchers.  Avalanche non-fungible tokens (NFTs) enable transactions that directly exchange sequence data on-chain and thus support the selling and buying of genomic mutations  by spending the output  of the NFTs created. </p></h2>
<UserForm msg="Enter a username and password and click to obtain a funded OnChainDNA wallet to buy and sell DNA NFTS with." />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import UserForm from '@/components/UserForm.vue'
 @Options({
   components: {
     UserForm
   }
 })

export default class Introduction extends Vue {}

</script>

<style>
/* */
</style>
