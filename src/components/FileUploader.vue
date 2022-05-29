<script lang="ts" setup>
import { Dashboard } from '@uppy/vue';
import Uppy from '@uppy/core';
import Webcam from '@uppy/webcam';
import GoldenRetriever from '@uppy/golden-retriever';
import RemoteSources from '@uppy/remote-sources';
import Url from '@uppy/url';
import DragDrop from '@uppy/drag-drop';
import ImageEditor from '@uppy/image-editor';
import StatusBar from '@uppy/status-bar';
import ProgressBar from '@uppy/progress-bar';

// Don't forget the CSS: core and UI components + plugins you are using
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/webcam/dist/style.css';
import '@uppy/drag-drop/dist/style.min.css';
import '@uppy/image-editor/dist/style.min.css';
import '@uppy/status-bar/dist/style.min.css';
import '@uppy/progress-bar/dist/style.min.css';


const uppy = new Uppy().use(Webcam);
</script>

<template>
    <Dashboard :uppy="uppy" :plugins="['Webcam']" />
</template>