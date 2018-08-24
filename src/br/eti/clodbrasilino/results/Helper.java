package br.eti.clodbrasilino.results;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.LinkedList;
import java.util.List;

public class Helper {
	
	public static String readFile(String path) 
			  throws IOException {
	  byte[] encoded = Files.readAllBytes(Paths.get(path));
	  return new String(encoded, "UTF-8");
	}
	
	public static List<String> getFilesFromFolder(String path){
		File folder = new File(path);
		String[] listOfFiles = folder.list();
		List<String> racesList = new LinkedList<String>();
		if(listOfFiles == null) return new LinkedList<String>();
	    for (int i = 0; i < listOfFiles.length; i++) {
	    	if(!listOfFiles[i].equals(".DS_Store"))
	        racesList.add(listOfFiles[i]);
	    }
	    return racesList;
	}
}
