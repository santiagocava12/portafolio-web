<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Aproximación de e (Serie)</title>
  <link rel="stylesheet" href="../css/practica-style.css">
</head>
<body>
  <div class="container">
    <h2>Aproximación del número e</h2>

    <form method="post" action="">
      <label for="tope">Ingrese el número de términos:</label>
      <input type="number" name="tope" id="tope" min="1" required>
      <input type="submit" value="Calcular">
    </form>

    <?php
    function factorial($num) {
      if ($num === 0 || $num === 1) return 1;
      $resultado = 1;
      for ($p = 2; $p <= $num; $p++) $resultado *= $p;
      return $resultado;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $limite_e = filter_input(INPUT_POST, 'tope', FILTER_VALIDATE_INT);

      if ($limite_e !== false && $limite_e >= 0) {
        $suma_e = 0.0;
        echo '<table>';
        echo '<tr><th>Término (n)</th><th>Valor de e aproximado</th></tr>';

        for ($contador = 0; $contador <= $limite_e; $contador++) {
          $suma_e += 1 / factorial($contador);
          echo "<tr><td>$contador</td><td>$suma_e</td></tr>";
        }
        echo '</table>';

        echo '<p class="resultado"><strong>Valor real de e:</strong> ' . exp(1) . '</p>';
      } else {
        echo "<p class='error'>Por favor ingrese un entero válido y mayor o igual a cero.</p>";
      }
    }
    ?>
  </div>
  <br>
  <a href="1.php">Ejercicio 1</a>
  <br>
</body>
</html>