<template>
  <div class="wisdom-center">
    <party-member></party-member>
    <hold-certificate></hold-certificate>
  </div>
</template>
<script>
import partyMember from './party-member'
import holdCertificate from './hold-certificate'
export default {
  data () {
    return {
      name: 'wisdomCenter'
    }
  },
  components: {
    partyMember,
    holdCertificate
  }
}
</script>
<style lang="scss" scoped>
.wisdom-center {
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding-top: 750px;
  display: flex;
  // border: 1px solid red;
}
</style>
