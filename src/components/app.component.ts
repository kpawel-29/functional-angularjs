/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
export class AppController {
    sampleText: string = 'Hello World!';
}

export const AppComponent: angular.IComponentOptions = {
    controller: AppController,
    template: require('./app.component.html')
};
