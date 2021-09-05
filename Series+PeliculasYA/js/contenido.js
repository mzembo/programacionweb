function selectProv(valor,tipoDeContenido) {
    var destino;
    switch (valor) {
        case 'T':
            destino = (tipoDeContenido == 'P')?'peliculas.html':'series.html';
            break;
        case 'A':
            destino = (tipoDeContenido == 'P')?'peliculasAmazonPrime.html':'seriesAmazonPrime.html';
            break;
        case 'D':
            destino = (tipoDeContenido == 'P')?'peliculasDisney+.html':'seriesDisney+.html';
            break;
        case 'H':
            destino = (tipoDeContenido == 'P')?'peliculasHBOmax.html':'seriesHBOmax.html';
            break;
        case 'N':
            destino = (tipoDeContenido == 'P')?'peliculasNetflix.html':'seriesNetflix.html';
            break;
        case 'P':
            destino = (tipoDeContenido == 'P')?'peliculasParamount+.html':'seriesParamount+.html';
            break;
        case 'S':
            destino = (tipoDeContenido == 'P')?'peliculasStarZ.html':'seriesStarZ.html';
            break;
    }
    location.href = destino;
}
