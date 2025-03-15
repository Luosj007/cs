import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selecteAddress = ref<AddressItem>()

  const changeSelectedAddress = (val: AddressItem) => {
    selecteAddress.value = val
  }

  return {
    selecteAddress,
    changeSelectedAddress,
  }
})
