<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page import="java.io.File" %>
<%@ page import="br.eti.clodbrasilino.results.Helper" %>

<%	String path = application.getInitParameter("Path");
 	String filename = request.getParameter("filename");
	String fileContent = "''";
	if(filename != null) fileContent = Helper.readFile(path+"\\"+filename);%>


<html>
	<head>
		<meta charset="UTF-8"/>
		<style type="text/css">
			* {
				font-family: monospace;
				font-size: large;
			}
			table {
				border-collapse: separate;
				border: solid thin;
			}
			td {
				border: solid thin;	
			}
			.rightAligned {
				text-align: right;
			}
			caption {
				font-size: xx-large;
				font-weight: bold;
			}
		</style>
		
		<script type="text/javascript">
			var readJSON = <%=fileContent%>;
		</script>
		<script type="text/javascript" src="js/tools.js"></script>
		
	</head>
	<body id="body">
		<form action="RaceResults.jsp">
			<select name="filename">
				<%for(String currentFilename: Helper.getFilesFromFolder(path)){%>
				<option value="<%=currentFilename%>"><%=currentFilename%></option>
				<%}%>
			</select>
			<input type="submit" value="Selecionar"/>
		</form>
		<script type="text/javascript" src="js/generateTable.js"></script>
	</body>
</html>
						