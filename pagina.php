<!DOCTYPE html>
<html lang="pt-br">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Mee Signo - Resultado</title>
</head>
<body>
  
  <?php

   // Transformando arquivo XML em Objeto
   $xml = simplexml_load_file('./dataset.xml') or die('ERRO: Não foi possível abrir o XML');
   
   // Exibe as informações do XML
   echo 'SignoNome: ' . $xml->signoNome . '<br>';
   echo 'Descricao: ' . $xml->descricao . '<br>';

   ?>

</body>
</html>

