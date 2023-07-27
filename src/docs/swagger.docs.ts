import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
export const swagger = (app) => {
    const options = new DocumentBuilder()
    .setTitle('API Test')
    .setDescription('Modelo de usuario Api test')
    .setVersion('1.0.0')
    .addTag('auth')
    .addTag('signup')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('/docs',app,document,{
        explorer:true,
        swaggerOptions:{
            filter:true,
            showRequestDuration:true,  

        }
    });

}