import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.*;
import java.nio.file.Files;
import java.nio.file.Paths;

public class day10 {
  private class Point {
    int xPos;
    int yPos;

  }

  public static void main(String[] args) throws IOException {
    List<String> list = Files.lines(Paths.get("day10/day10.txt")).collect(Collectors.toList());

  }

  private static void day10a(List<String> list) {
    List<List<Character>> grid = new ArrayList<>();

    for (String point : list) {
      int xPos = Integer.parseInt(point.substring(10, 16).trim());
      int yPos = Integer.parseInt(point.substring(18, 24).trim());
      int xVel = Integer.parseInt(point.substring(36, 38).trim());
      int yVel = Integer.parseInt(point.substring(40, 42).trim());
    }
  }
}