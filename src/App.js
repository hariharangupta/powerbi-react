import "./App.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import ReportFliter from "./ReportFliter";

function App() {
//   const basicFilter = {
//     $schema: "http://powerbi.com/product/schema#basic",
//     target: {
// 		$schema: "http://powerbi.com/product/schema#column",
//       table: "IT Area",
//       column: "IT Area",
//     },
	
//     operator: "In",
//     values: ["BU Support"],
//     filterType: models.FilterType.BasicFilter,
//     requireSingleSelection: false,

//   };
//   let target = {
// 	table: "IT Area",
// 	column: "IT Area",
//   }
  
//   let slicers = 
// 	{
// 	  selector: {
// 		$schema: "http://powerbi.com/product/schema#slicerTargetSelector",
// 		target: target 
// 	  },
// 	  state: {
// 		filters: [basicFilter]
// 	  }
// 	}

  
// //   fliter 1
// const basicFilterOne = {
//     $schema: "http://powerbi.com/product/schema#basic",
//     target: {
// 		$schema: "http://powerbi.com/product/schema#column",
//       table: "Cost Element Group",
//       column: "CAPEX",
//     },
	
//     operator: "In",
//     values: ["BU Support"],
//     filterType: models.FilterType.BasicFilter,
//     requireSingleSelection: false,

//   };
//   let targetOne = {
// 	table: "Cost Element Group",
// 	column: "CAPEX",
//   }
  
//   let slicersOne = 
// 	{
// 	  selector: {
// 		$schema: "http://powerbi.com/product/schema#slicerTargetSelector",
// 		target: targetOne 
// 	  },
// 	  state: {
// 		filters: [basicFilterOne]
// 	  }
// 	}
  

return(
	<ReportFliter />
)

//   return (
//     <div className="App">
//       <h1>Power BI </h1>
//       <PowerBIEmbed
//         embedConfig={{
//           type: "report", // Supported types: report, dashboard, tile, visual and qna
//           id: "f9b3e5b3-eba0-4aa4-967d-8f1737582a3b",
// 		  accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTVlNGY3YjktZjIxMS00YjkzLTlmZjMtYWIyOGU2MGZjMDQ2LyIsImlhdCI6MTYyOTk3NzM1MiwibmJmIjoxNjI5OTc3MzUyLCJleHAiOjE2Mjk5ODEyNTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFoYW44MkxMVkwwd2YxSjNWdXliMCtZRjRGd3ZIZXMxL0c5WUtndDdxQ1JYTXBoYVJ4WGw3WnJTOUIvQitCOWxuIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiYWVybyIsImdpdmVuX25hbWUiOiJzdGFjayIsImlwYWRkciI6IjQ5LjIwNi42MC41NCIsIm5hbWUiOiJzdGFja2Flcm9wb3dlcmJpIiwib2lkIjoiYmQ1ZjI3ZjYtOTQzZi00MTRiLTk0MjQtYWQyZjFjNzBjNWE1IiwicHVpZCI6IjEwMDMyMDAxNzEzQTk3MjgiLCJyaCI6IjAuQVhFQXVmZmtsUkh5azB1Zjg2c281Z19BUmc4QkhJZGhYckZQZzZ5WVlRcC1rUkJ4QUtVLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlptazhLMmRLSndDTVdvaWFlVjR4QlBRZm1mcUJlSWtfV2NfVENsSWxOUTQiLCJ0aWQiOiI5NWU0ZjdiOS1mMjExLTRiOTMtOWZmMy1hYjI4ZTYwZmMwNDYiLCJ1bmlxdWVfbmFtZSI6InN0YWNrYWVyb3Bvd2VyYmlAc3RhY2thZXJvc2FtcGxlLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InN0YWNrYWVyb3Bvd2VyYmlAc3RhY2thZXJvc2FtcGxlLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6InJPWmVuWW5VaTBDLTJObFp0MFVZQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.AmLN0OUGKscS_XzM56mTwbYW0sM5kSj55V8pg6ZPsKQ3EkYgphRetKz8gpHYE-xqyLfPHjMu6mxXXOfWQP7x_wpx0YSz1GOKW7blwp-9yFJYoSGKfkCjT4twjY7xid9k-m2lCNzweYYsEmtDr5XwAyRiKp3ZnGOXki8isjL-t7qD7V-L8p_EyYtPqKFkZP8__W8_Z1b2oH9MLrtygCZdii7O7IfHDSEnn_a_Rvsx-4nM1JO8WqYQVlk0CnOAaoJ_poaAKAtGhbYfDeSERdnSC5Tyi-f9Z_c8VTMm-H8S9Nu2I5HjJZxcOxjbq7L0kJlTpVvCg-lxkgfVrWLxyvOdrw",
//           embedUrl:"https://app.powerbi.com/reportEmbed?reportId=f9b3e5b3-eba0-4aa4-967d-8f1737582a3b&groupId=b8db3236-a242-4bb1-99a2-b6a31ccb798c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
//           tokenType: models.TokenType.Aad,
//         //   filters: [basicFilter],
// 		   slicers:[slicers,slicersOne],
		   
//         }}
//         eventHandlers={
//           new Map([
//             [
//               "loaded",
//               function () {
//                 console.log("Report loaded");
//               },
//             ],
//             [
//               "rendered",
//               function () {
//                 console.log("Report rendered");
//               },
//             ],
//             [
//               "error",
//               function (event) {
//                 console.log(event.detail);
//               },
//             ],
//           ])
//         }
//         cssClassName={"report-container"}
//         getEmbeddedComponent={(embeddedReport) => {
//           window.report = embeddedReport;
//         }}
//       />
//     </div>
//   );
}

export default App;
