import React, { useEffect, useRef } from 'react';
import { useReport } from 'powerbi-report-component';

const ReportFliter = ({ accessToken, embedUrl, embedId }) => {
  const reportRef = useRef(null);
  const [report, embed] = useReport();

  const myReportConfig = {
    embedType: 'report',
    tokenType: 'Aad',
    accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTVlNGY3YjktZjIxMS00YjkzLTlmZjMtYWIyOGU2MGZjMDQ2LyIsImlhdCI6MTYzMDAzNzA1MCwibmJmIjoxNjMwMDM3MDUwLCJleHAiOjE2MzAwNDA5NTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFGSWFqMkVPSDNOQklyNjQwMDF0WHBGSUxnOE9TNGtLeXF6VXNFbnhlYnE5R2RSNU1iSHdEUDNLVTIyd3VhT1BiIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiYWVybyIsImdpdmVuX25hbWUiOiJzdGFjayIsImlwYWRkciI6IjQ5LjIwNi42MC41NCIsIm5hbWUiOiJzdGFja2Flcm9wb3dlcmJpIiwib2lkIjoiYmQ1ZjI3ZjYtOTQzZi00MTRiLTk0MjQtYWQyZjFjNzBjNWE1IiwicHVpZCI6IjEwMDMyMDAxNzEzQTk3MjgiLCJyaCI6IjAuQVhFQXVmZmtsUkh5azB1Zjg2c281Z19BUmc4QkhJZGhYckZQZzZ5WVlRcC1rUkJ4QUtVLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlptazhLMmRLSndDTVdvaWFlVjR4QlBRZm1mcUJlSWtfV2NfVENsSWxOUTQiLCJ0aWQiOiI5NWU0ZjdiOS1mMjExLTRiOTMtOWZmMy1hYjI4ZTYwZmMwNDYiLCJ1bmlxdWVfbmFtZSI6InN0YWNrYWVyb3Bvd2VyYmlAc3RhY2thZXJvc2FtcGxlLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InN0YWNrYWVyb3Bvd2VyYmlAc3RhY2thZXJvc2FtcGxlLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InlQZmhRWHNZSVVTbkt6UG9YNGxLQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.UxXyJsPlKyYdheM2lX735fzuxMNR-0B0kuLpbOAyVfeObiAs1d7Qd6uneY2fg7zfjQt5_7WTmZDV-NpP5U_VrT9ZTsUXk5sBMXvDvpcH7aWkI1XQk3WDFbPp2k7YU8mkF0vZtG8_ZqnxMtt5qildZ5NaELrQm14r21RjTzSWLyIG5IeQOmvLiLN0khQxEqfONbwc3SVaVSoSxR0DlQAUUNfQfqSdv2L9uQ2JygymzORlFeto1joFoaVkRWc5cL15tMRB6tDDLRnudDAatf22ZwX0CQlJTD8axzspNU4PL-GYyCgfhjJDrhrwpbyq8x7SoOb6gRpcuwWCbg4uWYOJOQ",
    embedUrl:"https://app.powerbi.com/reportEmbed?reportId=f9b3e5b3-eba0-4aa4-967d-8f1737582a3b&groupId=b8db3236-a242-4bb1-99a2-b6a31ccb798c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          embedId: "f9b3e5b3-eba0-4aa4-967d-8f1737582a3b",
    reportMode: "View", // "Edit"
    permissions: "View", // "All" (when using "Edit" mode)
    extraSettings: {
      filterPaneEnabled: false,
      navContentPaneEnabled: false,
    },
  };

  // important
  useEffect(() => {
    // call inside useEffect so the we have the reportRef (reference available)
    embed(reportRef, myReportConfig);
  }, []);
  
    

    const basicfilter = {
        $schema: "http://powerbi.com/product/schema#basic",
        target: {
          table: "IT Area",
          column: "IT Area"
        },
        operator: "In",
        values: ["BU Support"]
      };
  
      const filterReport = (report) =>{
        setFilter(basicfilter)
      }

     const setFilter = (filter) => report.setFilters([filter]).catch(function (errors) {
            console.log(errors);
        });



  return (
    <div className="report-container">
      <h1 className = "App">Powerbi React</h1>
      <div className="report-container" ref={reportRef} />
      <button onClick = {filterReport}>FliterReport</button>
    </div>
  );
};

export default ReportFliter;