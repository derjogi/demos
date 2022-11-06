<script lang="ts">
    import { Pie } from 'svelte-chartjs'
    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      ArcElement,
      CategoryScale,
	    type ChartData,
    } from 'chart.js';
    import darkMode from "../../store";

    let textColor
    darkMode.subscribe(dark => textColor = dark ? "white" : "black")

    ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

    export let data: ChartData<"pie", number[], unknown>;
    let chartOptions
    // splitting this up so that it actually gets updated.
    $: chartOptions = { responsive: true, plugins: {legend: {labels: { color:textColor}}}}
    console.log("ChartOptions: ", chartOptions)
  </script>

  <Pie {data} options={chartOptions} />
