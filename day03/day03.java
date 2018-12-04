import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.FileReader;
import java.util.*;

public class day03 {
  public static void main(String[] args) throws IOException {
    // Read file
    BufferedReader br = new BufferedReader(new FileReader("day03/day03.txt"));

    // Store each line of information in a Linked List
    List<String> lines = new LinkedList<>();
    String line;

    while ((line = br.readLine()) != null) {
      lines.add(line);
    }

    // Get results
    System.out.println(day03a(lines));
    System.out.println(day03b(lines));

    // Clean up
    br.close();

  }

  private static int day03a(List<String> lines) {
    // Store the grid
    int[][] grid = new int[1050][1050];

    // Process each line
    for (String line : lines) {
      // Get all the info for each line
      String[] mainInfo = (line.split("@")[1].trim()).split(":");
      int[] coords = convertStringArrToIntArr(mainInfo[0].split(","));
      int[] dim = convertStringArrToIntArr(mainInfo[1].split("x"));

      // Populate the grid
      for (int row = coords[0]; row < coords[0] + dim[0]; ++row) {
        for (int col = coords[1]; col < coords[1] + dim[1]; ++col) {
          ++grid[row][col];
        }
      }
    }

    // Count how many values of the grid are greater than 1
    int count = 0;

    for (int row = 0; row < 1050; ++row) {
      for (int col = 0; col < 1050; ++col) {
        count += (grid[row][col] > 1 ? 1 : 0);
      }
    }

    return count;
  }

  private static String day03b(List<String> lines) {
    // Store the grids
    int[][] grid = new int[1050][1050];
    String[][] mostRecentId = new String[1050][1050];
    HashMap<String, Integer> idToInches = new HashMap<>();

    // Process each line
    for (String line : lines) {
      // Get all the info for each line
      String id = (line.split("@")[0].trim());
      String[] mainInfo = (line.split("@")[1].trim()).split(":");
      int[] coords = convertStringArrToIntArr(mainInfo[0].split(","));
      int[] dim = convertStringArrToIntArr(mainInfo[1].split("x"));

      // Populate the grid
      for (int row = coords[0]; row < coords[0] + dim[0]; ++row) {
        for (int col = coords[1]; col < coords[1] + dim[1]; ++col) {
          ++grid[row][col];
          mostRecentId[row][col] = id;
        }
      }

      // Update map
      idToInches.put(id, dim[0] * dim[1]);
    }

    // System.out.println(idToInches.keySet().size());

    // Brute force check each claim for integrity
    for (String line : lines) {
      // Get all the info for each line
      String id = (line.split("@")[0].trim());
      String[] mainInfo = (line.split("@")[1].trim()).split(":");
      int[] coords = convertStringArrToIntArr(mainInfo[0].split(","));
      int[] dim = convertStringArrToIntArr(mainInfo[1].split("x"));

      boolean overlapping = false;

      for (int row = coords[0]; row < coords[0] + dim[0]; ++row) {
        for (int col = coords[1]; col < coords[1] + dim[1]; ++col) {
          if (grid[row][col] > 1) {
            overlapping = true;
          }
        }
      }

      if (!overlapping)
        return id;
    }

    return null;
  }

  private static int[] convertStringArrToIntArr(String[] arr) {
    return new int[] { Integer.parseInt(arr[0].trim()), Integer.parseInt(arr[1].trim()) };
  }

}