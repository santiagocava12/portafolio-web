<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Aproximación de π (Leibniz)</title>
  <link rel="stylesheet" href="../css/practica-style.css">
</head>
<body>
  <div class="container">
    <h2>Aproximación de π usando la Serie de Leibniz</h2>

    <form method="post" action="">
      <label for="limite">Ingrese el número de términos:</label>
      <input type="number" name="limite" id="limite" min="1" required>
      <input type="submit" value="Calcular">
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $limite_pi = filter_input(INPUT_POST, 'limite', FILTER_VALIDATE_INT);

      if ($limite_pi !== false && $limite_pi > 0) {
        $total = 0.0;
        echo '<table>';
        echo '<tr><th>Término (i)</th><th>Valor de π aproximado</th></tr>';

        for ($iterador = 0; $iterador <= $limite_pi; $iterador++) {
          $termino = (($iterador % 2) === 0 ? 1 : -1) / (2 * $iterador + 1);
          $total += $termino;
          $pi_aprox = 4 * $total;
          echo "<tr><td>$iterador</td><td>$pi_aprox</td></tr>";
        }
        echo '</table>';

        echo '<p class="resultado"><strong>Valor real de π:</strong> ' . pi() . '</p>';
      } else {
        echo "<p class='error'>Por favor ingrese un entero válido y mayor que cero.</p>";
      }
    }
    ?>
  </div>
  <br>
  <a href="2.php">Ejercicio 2</a>
  <br>
</body>

<footer>
    <br>
    <a href="../index.html" class="back-link">Regresar al Portafolio</a>
</footer>
</html>