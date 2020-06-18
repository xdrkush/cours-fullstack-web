/*
 * Scrape job title, url, and location from Taleo jobs page at 
 * https://l3com.taleo.net/careersection/l3_ext_us/jobsearch.ftl
 *
 * Usage: $ casperjs scraper.js 
 */
var casper = require("casper").create({
    pageSettings: {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20130404 Firefox/23.0"
    }
});

var url = 'https://l3com.taleo.net/careersection/l3_ext_us/jobsearch.ftl';
// var currentPage = 1;
var jobs = [];

var terminate = function() {
    this.echo("Exiting..").exit();
};

var processPage = function() {
    // Part 1: Scrape and print the jobs in the jobs table
    jobs = this.evaluate(getJobs);
    require('utils').dump(jobs);

    // Part 2: Exit if we're finished scraping
    // if (currentPage >= 3 || !this.exists("table#jobs")) {
    //     return terminate.call(casper);
    // }

    // Part 3: Click the Next link and wait for the next page 
    // of jobs to load
    // currentPage++;

    // this.thenClick("div#jobPager a#next").then(function() {
    //     this.waitFor(function() {
    //         return currentPage === this.evaluate(getSelectedPage);
    //     }, processPage, terminate);
    // });
};

function getJobs() {
    var rows = document.querySelectorAll('table#jobs tr[id^="job"]');
    var jobs = [];

    for (var i = 0, row; row = rows[i]; i++) {
        var a = row.cells[1].querySelector('a[href*="jobdetail.ftl?job="]');
        var l = row.cells[2].querySelector('span');
        var job = {};

        job['title'] = a.innerText;
        job['url'] = a.getAttribute('href');
        job['location'] = l.innerText;
        jobs.push(job);
    } 

    return jobs;
}

casper.start(url);

/* Wait for 'Job Openings 1 - 25 of 1105' to appear within span */        
casper.waitFor(processPage, terminate, 5000);

casper.run();
