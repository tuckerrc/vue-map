<template>
    <div>
        <ul v-if="jobs.length">
            <JobListItem
              v-for="job in jobs"
              :key="job.guid"
              :job="job"
            />
        </ul>
        <p v-else>
            No jobs found.
        </p>
    </div>
</template>

<script>
import JobListItem from "./JobListItem.vue"

export default {
    components: {
        JobListItem
    },
    data () {
        return {
            jobs: [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -74.006,
                            40.7143
                        ]
                    },
                    "properties": {
                        "guid": 200651,
                        "link": "https://stackoverflow.com/jobs/200651/sr-front-end-engineer-growth-and-lifecycle-grubhub-seamless?a=15i6UURC58Ck",
                        "title": "Sr. Front End Engineer- Growth and Lifecycle at GrubHub Seamless (New York, NY) (allows remote)",
                        "location": "New York, NY",
                        "category": [
                            "reactjs",
                            "javascript",
                            "vue.js",
                            "angular"
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -74.006,
                            40.7143
                        ]
                    },
                    "properties": {
                        "guid": 200350,
                        "link": "https://stackoverflow.com/jobs/200350/sr-full-stack-engineer-scala-1010data?a=15bQSDTAALdu",
                        "title": "Sr. Full Stack Engineer (Scala) at 1010data (New York, NY)",
                        "location": "New York, NY",
                        "category": [
                            "scala",
                            "f#",
                            "javascript",
                            "git",
                            "vue.js"
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -74.006,
                            40.7143
                        ]
                    },
                    "properties": {
                        "guid": 192982,
                        "link": "https://stackoverflow.com/jobs/192982/lead-front-end-designer-engineer-lateral?a=12IEmt5v17GM",
                        "title": "Lead Front End Designer / Engineer at Lateral (New York, NY)",
                        "pubDate": "Tue, 04 Sep 2018 20:30:30 Z",
                        "location": "New York, NY",
                        "category": [
                            "javascript",
                            "node.js",
                            "reactjs",
                            "react-native",
                            "vue.js"
                        ]
                    }
                }
            ]
        }
    }
}
</script>
