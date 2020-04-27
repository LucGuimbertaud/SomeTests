<?php
if(strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
    ?>
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Correspondance américaine d'une note de musique</title>
        </head>

        <body>
<?php
}
?>

        <p>
            La notation anglaise utilise les premières lettres de l'alphabet. La notation allemande remplace le B par un H pour des raisons historiques.
        </p>
        <p>
            En France, Italie, Espagne et dans d'autre pays (Bulgarie, Thailande, ...) on utilise la solmisation basée au départ sur un texte latin :
        </p>
        <p>
            Ut queant laxis / resonare fibris / mira gestorum / famuli tuorum / solve polluti / labii reatum / Sancte Iohannes. Le ut sera remplacé par le do plus tard et subiste d'ailleur encore notament avec la clé d'ut.
        </p>

        <?php
if(strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'){
    ?>
    </body>
    </html>
<?php
}
?>