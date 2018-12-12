import java.util.Arrays;

public class day11 {
  public static void main(String[] args) {
    // Generate grid with provided serial number
    int[][] grid = generateGrid(9221);

    // Find most powerful squares
    day11a(grid);
    day11b(grid);
  }

  private static void day11a(int[][] grid) {
    int[] xy = { 0, 0 };
    int maxPower = Integer.MIN_VALUE;

    for (int x = 1; x < 299; ++x) {
      for (int y = 1; y < 299; ++y) {
        int power = 0;

        for (int xCur = x; xCur < x + 3; ++xCur) {
          for (int yCur = y; yCur < y + 3; ++yCur) {
            power += grid[xCur][yCur];
          }
        }

        if (power > maxPower) {
          xy[0] = x;
          xy[1] = y;
          maxPower = power;
        }
      }
    }

    System.out.println(Arrays.toString(xy));
  }

  private static void day11b(int[][] grid) {
    int[] xy = { 0, 0 };
    int maxPower = Integer.MIN_VALUE;
    int size = -1;

    for (int w = 1; w < 301; ++w) {
      for (int x = 1; x < 302 - w; ++x) {
        for (int y = 1; y < 302 - w; ++y) {
          int power = 0;

          for (int xCur = x; xCur < x + w; ++xCur) {
            for (int yCur = y; yCur < y + w; ++yCur) {
              power += grid[xCur][yCur];
            }
          }

          if (power > maxPower) {
            xy[0] = x;
            xy[1] = y;
            maxPower = power;
            size = w;
          }
        }
      }
    }

    System.out.println(Arrays.toString(xy) + " " + size);
  }

  private static int[][] generateGrid(int serialNumber) {
    int[][] grid = new int[301][301];

    for (int x = 1; x < 301; ++x) {
      for (int y = 1; y < 301; ++y) {
        int rackId = x + 10;
        int power = rackId * y;
        power += serialNumber;
        power *= rackId;

        if (power < 100) {
          power = 0;
        } else {
          String powerStr = String.valueOf(power);
          power = Integer.parseInt(String.valueOf(powerStr.charAt(powerStr.length() - 3)));
        }

        grid[x][y] = power - 5;
      }
    }

    return grid;
  }
}