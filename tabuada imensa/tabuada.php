<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabuada Gerada</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <?php
        if (isset($_POST['numero']) && is_numeric($_POST['numero'])) {
            $numero = (int)$_POST['numero'];
            echo '<h1>Tabuada do '. htmlspecialchars($numero). '</h1>';
            echo '<table>';
            echo '<thead><tr><th>Operação</th><th>Resultado</th></tr></thead>';
            echo '<tbody>';
            for ($i = 1; $i <= 100; $i++) {
                $resultado = $numero * $i;
                echo '<tr>';
                echo '<td>' . $numero . ' x ' . $i . '</td>';
                echo '<td>' . $resultado . '</td>';
                echo '</tr>';
            }
            echo '</tbody>';
            echo '</table>';
        } else {
            echo '<h1>Erro!</h1>';
            echo '<p style="color: red;">Por favor, digite um número válido no formulário.</p>';
        }
        ?>
        <p style="text-align: center; margin-top: 30px;"><a href="tabuada.html">Gerar Nova Tabuada</a></p>
    </div>
</body>
</html>