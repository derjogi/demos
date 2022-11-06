<script lang="ts">
    import { ClickableTile, ExpandableTile, Tab, TabContent, Tabs, Tile } from "carbon-components-svelte";
	import { Label } from "carbon-icons-svelte";
	import PieChart from "$lib/components/PieChart.svelte";

    export let data
    let issue = data.issue
    console.log(issue)

    let pieData = {
  labels: ['For', 'Against', 'Neutral'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#269618',
        '#ce3a3a',
        '#FDB45C',
      ],
      hoverBackgroundColor: [
        'rgba(45,175,29,0.75)',
        'rgba(206,72,72,0.76)',
        '#FFC870',
      ],
    },
  ],
};

</script>

<div id="main">
    <div id="left">
        <h1>{issue.title}</h1>

        <ExpandableTile tileCollapsedLabel="View more" tileExpandedLabel="View less">
            <div slot="above"><p>Description:</p><p>{issue.description}</p></div>
            <div slot="below">Some more text that might show up here. Probably just the remainder of the description if it's too long, not quite sure why this is not part of the Expandable API :-/ </div>
        </ExpandableTile>

        <Tabs>
            <Tab label="Summary"/>
            <Tab label="Posts"/>
            <Tab label="Metrics"/>
            <svelte:fragment slot = "content">
                <TabContent><img src={issue.images[0]}/></TabContent>
                <TabContent><img src={issue.images[1]}/></TabContent>
                <TabContent><img src={issue.images[2]}/></TabContent>
            </svelte:fragment>
        </Tabs>

    </div>

    <div id="right">
        <Tile>
            <div class="right-tile">
            <ul>
                <li>Some: {issue.brand}</li>
                <li>Feature: {issue.price}</li>
                <br/>
                <PieChart data={pieData}/>
            </ul>
        </div>
        </Tile>
    </div>
</div>
<style>

    #left {
        float: left;
        width: 65%;
        height: 90%;
        overflow: scroll;
    }

    #right {
        float: right;
        width: 30%;
        height: 90vh;
        overflow: scroll;
    }

    .right-tile {
        min-height: 80vh;
    }

    h1 {
        margin: 20px;
    }
</style>

