---
title: "Examen: Álgebra Lineal"
date: 2024-09-15
tags:
  - matematicas
  - algebra
  - gamedevelopment
---
Click en los títulos para ver sus soluciones y una breve explicación.
### **[Sección 1: Vectores y Operaciones Vectoriales](soluciones-seccion-1-vectores.md)**

1. Dado el vector $A = (3, -2, 5)$ y el vector $B = (1, 4, -2)$, realiza las siguientes operaciones:
    - a) Suma de **A** y **B**.
    - b) Producto escalar de **A** y **B**.
2. Un objeto en un videojuego se mueve con la velocidad $V = (5, 3, 2)$ y la fuerza aplicada en la dirección $F = (2, 0, -3)$. ¿El movimiento del objeto se verá acelerado o desacelerado? Justifica tu respuesta usando el concepto del ángulo entre vectores.
3. Dado un vector $C = (4, 6, 8)$, normaliza este vector. Explica la importancia de normalizar un vector en el contexto de gráficos por computadora.

---

### **[Sección 2: Matrices y Transformaciones](soluciones-seccion-2-matrices.md)**

1. Dada la matriz de rotación en el plano XY:
    
    $$
    R = \begin{pmatrix}
    \cos \theta & -\sin \theta \\
    \sin \theta & \cos \theta
    \end{pmatrix}
    $$
    
    - a) Aplica esta matriz de rotación a un punto $P = (2, 1)$ con un ángulo de $θ = 45^\circ$.
    - b) Explica cómo esta transformación se utiliza en los videojuegos para rotar objetos en 2D.
2. Dada la matriz de transformación en 3D:
    
    $$
    T = \begin{pmatrix}
    1 & 0 & 0 & 2 \\
    0 & 1 & 0 & -1 \\
    0 & 0 & 1 & 3 \\
    0 & 0 & 0 & 1 
    \end{pmatrix}
    $$
    
    Aplica esta matriz a un vector de posición $P = (1, 1, 1, 1)$ y explica qué tipo de transformación se ha realizado.
    
3. Dado un modelo en 3D, necesitas escalarlo en un 50% en todos los ejes. Escribe la matriz de escala correspondiente y aplica dicha matriz a las coordenadas del punto $Q = (2, 3, 4)$.

---

### **[Sección 3: Cuaterniones](soluciones-seccion-3-cuaterniones.md)**

1. Define qué es un cuaternión y por qué es preferible en videojuegos para realizar rotaciones 3D en comparación con las matrices de rotación.
2. Dado el cuaternión $q=(0,0.707,0.707,0)$, que representa una rotación de $90^\circ$ en el eje Z, aplica este cuaternión a un punto $P = (1, 0, 0)$ y calcula las nuevas coordenadas.

---

### **[Sección 4: Proyecciones y Cámaras](soluciones-seccion-4-proyecciones.md)**

1. Considera un sistema de coordenadas homogéneas y una proyección en perspectiva definida por la siguiente matriz:
    
    $$
    P = \begin{pmatrix}
    1 & 0 & 0 & 0 \\
    0 & 1 & 0 & 0 \\
    0 & 0 & 0 & -1 \\
    0 & 0 & -1/d & 0
    \end{pmatrix}
    $$
    
    Aplica esta matriz de proyección a un punto $R = (2, 3, 4, 1)$ para $d=2$. Explica el significado de la proyección en perspectiva en el contexto de los videojuegos.
    
2. Explica cómo se utiliza la proyección ortogonal en videojuegos 2D y cómo se diferencia de la proyección en perspectiva.

---

### **[Sección 5: Espacios Vectoriales y Colisiones](soluciones-seccion-5-colisiones.md)**

1. Dos objetos en un juego están en las posiciones $A = (1, 2, 3)$ y $B = (4, 5, 6)$. El objeto **A** tiene un radio de colisión de 2 unidades y el objeto **B** tiene un radio de colisión de 3 unidades. ¿Estos objetos colisionan entre sí? Justifica tu respuesta calculando la distancia entre ellos.

---

### **[Sección 6: Determinantes e Inversas de Matrices](soluciones-seccion-6-determinantes.md)**

1. Calcula el determinante de la siguiente matriz 3x3:
    
    $$
    A = \begin{pmatrix}
    2 & 1 & 3 \\
    4 & 2 & 1 \\
    0 & 5 & 6
    \end{pmatrix}
    $$
    
- Explica el significado del determinante en el contexto de transformaciones en el espacio tridimensional en un videojuego (escalado, colapso de espacio, etc.).
- Dada la matriz de transformación:
    
    $$
    B = \begin{pmatrix}
    2 & 0 & 1 \\
    3 & 1 & 0 \\
    0 & 2 & 1
    \end{pmatrix}
    $$
    
- a) Calcula la inversa de la matriz B.
- b) Explica cómo se utilizaría la inversa de una matriz en un juego para revertir una transformación aplicada a un objeto en el espacio 3D.

---

### **[Sección 7: Composición de Transformaciones](soluciones-seccion-7-composicion-de-transformaciones.md)**

1. Un personaje en un videojuego está inicialmente en la posición $P = (1, 2, 3)$. El personaje es primero trasladado por el vector $T = (3, -2, 5)$, y luego rotado $90^\circ$ alrededor del eje Z. Escribe las matrices de transformación para ambas operaciones y calcula la posición final del personaje después de aplicar las dos transformaciones.
2. En un motor de juego, aplicas una matriz de rotación $R$ y luego una matriz de escala $S$ a un modelo en 3D. ¿Es lo mismo aplicar primero la escala y luego la rotación? Justifica tu respuesta matemática y visualmente.

---

### **[Sección 8: Autovalores y Autovectores](soluciones-seccion-8-autovalores-autovectores.md)**

1. Dada la matriz:
    
    $$
    C = \begin{pmatrix}
    4 & 1 \\
    2 & 3
    \end{pmatrix}
    $$
    
    - a) Calcula los autovalores de la matriz $C$.        
    - b) Explica cómo los autovalores y autovectores pueden utilizarse para simplificar cálculos en simulaciones físicas dentro de un videojuego (por ejemplo, en sistemas de partículas).
2. ¿Por qué es importante que las matrices que representan transformaciones lineales sean diagonalizables en el contexto del desarrollo de videojuegos? Explica el proceso de diagonalización y cómo puede optimizar operaciones repetidas.

---

### **[Sección 9: Interpolación Lineal y SLERP](soluciones-seccion-9-interpolacion.md)**

1. Define qué es la interpolación lineal (Lerp) y proporciona un ejemplo práctico de cómo se utilizaría en la animación de un personaje en un videojuego, especificando las coordenadas de inicio y fin.
2. Explica la diferencia entre interpolación lineal (Lerp) y la interpolación esférica (SLERP). En un videojuego 3D, ¿por qué es más conveniente usar SLERP cuando se interpola entre dos rotaciones? Proporciona un ejemplo de cálculo entre dos cuaterniones para ilustrar tu explicación.

---

### **[Sección 10: Aplicación de Autovalores en Compresión de Modelos 3D](soluciones-seccion-10-autovalores-2.md)**

1. Los autovalores y autovectores son fundamentales en la compresión de modelos 3D, como en la reducción de polígonos. Explica cómo se pueden utilizar autovalores para detectar los ejes principales de un modelo 3D y reducir su complejidad sin perder demasiada calidad visual. Da un ejemplo de cómo se aplicaría este proceso a un modelo de un objeto en un juego.

---

### **[Sección 11: Proyección de un Objeto en un Espacio Ortogonal](soluciones-seccion-11-espacio-ortogonal.md)**

1. Proyecta el vector $V = (3, 4, 5)$ sobre el plano XY usando matrices de proyección. ¿Cómo se vería este objeto proyectado en un videojuego 2D desde una vista ortogonal? Explica la utilidad de las proyecciones ortogonales en juegos en 2D o juegos con estilo isométrico.