<script lang="ts">
  import Versions from './components/Versions.svelte';
  import { trpc } from './trpc-client';
  let response = 'Marco';
</script>

<div class="p-5">
  <button
    class="btn rounded-full"
    on:click={async () => {
      response = (await trpc.marco.query()).text;
      console.log(response);
    }}>{response}</button
  >
  <div role="alert" class="alert alert-info">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-current shrink-0 w-6 h-6"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path></svg
    >
    <span><Versions /></span>
  </div>
</div>
