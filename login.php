<html>

	<head>
		<title> PHP Test </title>
	</head>
 
	<body>
	
		<p> Hello World </p>
		
		<form action="welcome.php" method="get">
		
			<table>
				<tr>
					<td>
						Name:
					</td>
					<td>
						 <input type="text" name="german"><br>
					</td>
				</tr>
				<tr>
					<td>
						E-mail: 
					</td>
					<td>
						<input type="text" name="email"><br>
					</td>
				</tr>
				<tr>
					<td>
						<input type="submit">
					</td>
				</tr>
			</table>
		</form>
		
		<?php
			
			// $usuario = 'pedro';
			
			// echo $usuario;
			
			// $usuario = array('nombre' => 'loy', 'apellido' => 'Ramirez', 'notas' => array('Matematica' => '18', 'Fisica' => array('1erlapso' => '12', 'segundo_lapso' => '14')));
			
			// var_dump($usuario);
			
			// echo $usuario['notas']['Fisica']['1erlapso'];
			
			
			
		?> 
	</body>
 
</html>


<style>

	table td{
		padding: 5px;
		text-align: center;
	}
	
	table{
		width: 200px;
		margin-left: 500px;
		margin-top: 100px;
		padding: 30px;
		background-color: lightblue;
		border: 1px solid #CCC;
		box-shadow: 5px 5px 5px grey;
	}

</style>