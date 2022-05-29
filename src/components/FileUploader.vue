<script lang="ts" setup>
import { Dashboard } from '@uppy/vue';
import Uppy from '@uppy/core';
import Webcam from '@uppy/webcam';

// Don't forget the CSS: core and UI components + plugins you are using
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/webcam/dist/style.css';

const uppy = new Uppy().use(Webcam);
</script>

<template>
    <Dashboard :uppy="uppy" :plugins="['Webcam']" />
</template>