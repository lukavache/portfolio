<template>
    <div class="terminal-container">
      <div class="terminal-header">
        <pre>          
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
        </pre>
        <span>
          Type <RouterLink class="highlight" :to="`/${i18n.global.locale.value}/info`">info</RouterLink>, 
          <RouterLink class="highlight" :to="`/${i18n.global.locale.value}/skills`">skills</RouterLink>,
          or <RouterLink class="highlight" :to="`/${i18n.global.locale.value}/work`">work</RouterLink> to navigate. Or click on the commands directly.
        </span><br>
        <span>
          Type <span class="highlight">help</span> for more information.
        </span><br>
        <span v-if="helpText">
          Type <button class="btn" @click="changeLanguage('ka')">ka</button>, or <button class="btn" @click="changeLanguage('en')">en</button> to translate text.<br>
          Type <button class="btn" @click="changeTheme('Light Theme')">light</button>, or <button class="btn" @click="changeTheme('Dark Theme')">dark</button> to change the theme.<br>
          Type <span class="highlight">clear</span> to clear text.
        </span>
        <p v-if="error">
          bash: {{errorTxt}}: command not found
        </p>
      </div>
  
      <div class="terminal-body">
        <div class="terminal-input">
          <span class="prompt">guest@portfolio:<span class="highlight">~$</span></span>
          <input class="input" v-model="command" @keyup.enter="executeCommand" placeholder="Enter command" ref="commandInput">
        </div>
        <div class="command-output">
          <component :is="currentComponent" />
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">

  import { onMounted, ref, shallowRef, watch, defineComponent } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import i18n from '@/composables/useLanguages';
  import PersonalView from '@/views/PersonalView.vue';
  import SkillsView from '@/views/SkillsView.vue';
  import WorkView from '@/views/WorkView.vue';

  type CommandKey = 'info' | 'skills' | 'work' | 'ka' | 'en' | 'light' | 'dark' | 'clear' | 'help';

  const command = ref<string>('');
  const commandInput = ref<HTMLInputElement | null>(null);
  const helpText = ref<boolean>(false);
  const error = ref<boolean>(false);
  const errorTxt = ref<string>('');
  const currentComponent = shallowRef<typeof defineComponent | null>(null);
  const router = useRouter();
  const route = useRoute();

  const commandsMap: Record<CommandKey, ReturnType<typeof defineComponent> | null> = {
    info: PersonalView,
    skills: SkillsView,
    work: WorkView,
    ka: null,
    en: null,
    light: null,
    dark: null,
    clear: null,
    help: null
  };

  const focus = () => {
    commandInput.value?.focus();
  }

  const setCurrentComponent = () => {
    const routeName = route.name as CommandKey | undefined;
    if (routeName && routeName in commandsMap) {
      currentComponent.value = commandsMap[routeName];
    } else {
      currentComponent.value = null;
    }
    focus();
  };

  const changeLanguage = (locale: string) => {
    focus();
    if (locale === i18n.global.locale.value) {
      return;
    }

    i18n.global.locale.value == locale;
  
    const params = { ...route.params, lang: locale };
    router.push({ name: route.name as string, params });
  };

  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', `${theme}`);
    focus();
  };

  const executeCommand = () => {
    const normalizedCommand: string = command.value.toLowerCase();
      switch (normalizedCommand) {
        case 'help':
          helpText.value = true;
          break;
        case 'clear':
          router.push({ name: 'terminal' });
          helpText.value = false;
          error.value = false;
          errorTxt.value = '';
          break;
        case 'ka':
        case 'en':
          changeLanguage(normalizedCommand);
          break;
        case 'light':
          changeTheme('Light Theme')
          break;
        case 'dark':
        changeTheme('Dark Theme')
          break;
        default:
          if (normalizedCommand in commandsMap) {
            router.push({ name: normalizedCommand });
          } else {
            error.value = true;
            errorTxt.value = command.value;
          }
      }
    command.value = '';
  };

  onMounted(setCurrentComponent);

  watch(route, setCurrentComponent);

</script>
  