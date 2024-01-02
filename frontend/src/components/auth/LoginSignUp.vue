<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
// import { userStore } from '../../stores/user'

// const store = userStore()
// const isAuth = computed(() => store.isLoggedIn)

const email = ref('')
const password = ref('')
const passwordRepeat = ref('')
let activeTab = ref(0)

// onMounted(() => {
//   watch(isAuth, async (newVal) => {
//     if (newVal) {
//       await nextTick()
//       const closeButton = document.querySelector(
//           '[data-hs-overlay="#hs-vertically-centered-scrollable-loginsignup-modal"]'
//       )
//       if (closeButton) {
//         closeButton.click()
//       }
//     }
//   })
// })
const callback = (response) => {
  // store.loginGoogle(response.code)
}

</script>

<template>
  <div
      id="hs-vertically-centered-scrollable-loginsignup-modal"
      class="hs-overlay-open:mt-7 hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
  >
    <div
        class="justify-center hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-3xl m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center"
    >
      <div
          class="max-h-full l flex flex-col bg-white border shadow-sm rounded-xl dark:bg-bgcolorcontext dark:border-sgray dark:shadow-slate-700/[.7]"
      >
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-sgray2">
          <h3 class="font-bold text-gray-800 dark:text-white">Autenticación</h3>
          <button
              type="button"
              class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-vertically-centered-scrollable-loginsignup-modal"
          >
            <span class="sr-only">Close</span>
            <svg
                class="w-3.5 h-3.5"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div class="overflow-y-auto">
          <div class="flex flex-row mx-auto">
            <div class="container w-[80vw] sm:w-[60vh] sm:mx-4 mx-auto flex flex-col">
              <nav class="relative mt-2 z-0 flex border overflow-hidden border-none" aria-label="Tabs" role="tablist">
                <button
                    type="button"
                    class="relative min-w-0 flex-1 first:border-l-0 border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:hover:bg-sgray2 dark:border-l-gray-700  dark:hover:text-gray-400 active"
                    id="bar-with-underline-item-1"
                    data-hs-tab="#bar-with-underline-1"
                    aria-controls="bar-with-underline-1"
                    role="tab"
                    @click="activeTab = 0"
                    :class="{
                    'border-b-sred dark:border-b-sred text-white': activeTab == 0,
                    'dark:border-b-white/30': activeTab != 0
                  }"
                >
                  Inciar sesión
                </button>
                <button
                    type="button"
                    class="relative min-w-0 flex-1 first:border-l-0 border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:border-l-gray-700  dark:hover:bg-sgray2 dark:hover:text-gray-400 dark:hover:text-gray-300"
                    id="bar-with-underline-item-2"
                    data-hs-tab="#bar-with-underline-2"
                    aria-controls="bar-with-underline-2"
                    role="tab"
                    :class="{
                    'border-b-sred dark:border-b-sred text-white': activeTab == 1,
                    'dark:border-b-white/30': activeTab != 1
                  }"
                    @click="activeTab = 1"
                >
                  Registrarse
                </button>
              </nav>
              <div class="mt-3">
                <div id="bar-with-underline-1" role="tabpanel" aria-labelledby="bar-with-underline-item-1">
                  <div class="p-4 sm:px-7 mb-3">
                    <div class="text-center">
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        ¿No tienes una cuenta?
                        <button
                            class="text-blue-600 decoration-2 hover:underline font-medium"
                            data-hs-tab="#bar-with-underline-2"
                            aria-controls="bar-with-underline-2"
                            id="bar-with-underline-item-2"
                            role="tab"
                            @click="activeTab = 1"
                        >
                          Registrate aquí
                        </button>
                      </p>
                    </div>
                    <div class="mt-5 flex flex-col">
                      <div
                          class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"
                      >
                        O
                      </div>

                      <!-- Form -->
                      <form>
                        <div class="grid gap-y-4">
                          <!-- Form Group -->
                          <div>
                            <label for="email" class="block text-sm mb-2 dark:text-white">Correo</label>
                            <div class="relative">
                              <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  v-model="email"
                                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-sgray2 dark:border-gray-700 dark:text-gray-400"
                                  required
                                  aria-describedby="email-error"
                              />
                              <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg
                                    class="h-5 w-5 text-red-500"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                >
                                  <path
                                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                              Please include a valid email address so we can get back to you
                            </p>
                          </div>
                          <!-- End Form Group -->

                          <!-- Form Group -->
                          <div>
                            <div class="flex justify-between items-center">
                              <label for="password" class="block text-sm mb-2 dark:text-white">Contraseña</label>
                              <a class="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                              >¿Contraseña olvidada?</a
                              >
                            </div>
                            <div class="relative">
                              <input
                                  type="password"
                                  id="password"
                                  v-model="password"
                                  name="password"
                                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-sgray2 dark:border-gray-700 dark:text-gray-400"
                                  required
                                  aria-describedby="password-error"
                              />
                              <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg
                                    class="h-5 w-5 text-red-500"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                >
                                  <path
                                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                          </div>
                          <!-- End Form Group -->

                          <!-- Checkbox -->
                          <div class="flex items-center">
                            <div class="flex">
                              <input
                                  id="remember-me"
                                  name="remember-me"
                                  type="checkbox"
                                  class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-sgray dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              />
                            </div>
                            <div class="ml-3">
                              <label for="remember-me" class="text-sm dark:text-white"
                              >Recuerda mi inicio de sesión</label
                              >
                            </div>
                          </div>
                          <!-- End Checkbox -->

                          <button
                              @click="store.login(email, password)"
                              type="button"
                              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sgray text-white hover:bg-sgray2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          >
                            Iniciar sesión
                          </button>
                        </div>
                      </form>
                      <!-- End Form -->
                    </div>
                  </div>
                </div>
                <div
                    id="bar-with-underline-2"
                    class="hidden"
                    role="tabpanel"
                    aria-labelledby="bar-with-underline-item-2"
                >
                  <div class="mt-3">
                    <div id="bar-with-underline-1" role="tabpanel" aria-labelledby="bar-with-underline-item-1">
                      <div class="p-4 sm:px-7 mb-3">
                        <div class="-mt-4">

                          <form autocomplete="off">
                            <div class="grid gap-y-4">
                              <!-- Form Group -->
                              <div>
                                <label class="block text-sm mb-2 dark:text-white">Correo</label>
                                <div class="relative">
                                  <input
                                      type="email"
                                      autocomplete="chrome-off"
                                      value=""
                                      class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-sgray2 dark:border-gray-700 dark:text-gray-400"
                                      required
                                  />
                                  <div
                                      class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                                  >
                                    <svg
                                        class="h-5 w-5 text-red-500"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                        aria-hidden="true"
                                    >
                                      <path
                                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                                  Please include a valid email address so we can get back to you
                                </p>
                              </div>
                              <!-- End Form Group -->

                              <!-- Form Group -->
                              <div class="flex justify-between space-x-4">
                                <div class="flex-grow">
                                  <div class="flex justify-between items-center">
                                    <label class="block text-sm mb-2 dark:text-white">Contraseña</label>
                                  </div>
                                  <div class="relative">
                                    <input
                                        type="password"
                                        autocomplete="chrome-off"
                                        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-sgray2 dark:border-gray-700 dark:text-gray-400"
                                        required
                                    />
                                    <div
                                        class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                                    >
                                      <svg
                                          class="h-5 w-5 text-red-500"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          viewBox="0 0 16 16"
                                          aria-hidden="true"
                                      >
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <p class="hidden text-xs text-red-600 mt-2" id="password-error">
                                    8+ characters required
                                  </p>
                                </div>

                                <!-- Campo para repetir contraseña -->
                                <div class="flex-grow">
                                  <div class="flex justify-between items-center">
                                    <label  class="block text-sm mb-2 dark:text-white"
                                    >Repetir Contraseña</label
                                    >
                                  </div>
                                  <div class="relative">
                                    <input
                                        type="password"
                                        v-model="passwordRepeat"
                                        autocomplete="off"
                                        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-sgray2 dark:border-gray-700 dark:text-gray-400"
                                        required
                                    />
                                    <div
                                        class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                                    >
                                      <svg
                                          class="h-5 w-5 text-red-500"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          viewBox="0 0 16 16"
                                          aria-hidden="true"
                                      >
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <p class="hidden text-xs text-red-600 mt-2" id="password_repeat-error">
                                    Las contraseñas deben coincidir
                                  </p>
                                </div>
                              </div>

                              <!-- End Form Group -->

                              <!-- Checkbox -->

                              <!-- End Checkbox -->

                              <button
                                  type="submit"
                                  class="py-3 mt-1 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-sgray text-white hover:bg-sgray2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                              >
                                Registrarse
                              </button>
                            </div>
                          </form>
                          <!-- End Form -->
                        </div>
                      </div>
                    </div>
                    <div
                        id="bar-with-underline-2"
                        class="hidden"
                        role="tabpanel"
                        aria-labelledby="bar-with-underline-item-2"
                    >
                      <p class="text-gray-500 dark:text-gray-400">
                        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab
                        body.
                      </p>
                    </div>
                    <div
                        id="bar-with-underline-3"
                        class="hidden"
                        role="tabpanel"
                        aria-labelledby="bar-with-underline-item-3"
                    >
                      <p class="text-gray-500 dark:text-gray-400">
                        This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab
                        body.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
