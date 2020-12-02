import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
      const user = await this.store.findRecord('user', 5);
      const project = await this.store.findRecord('project', 51);
      project.staff.forEach(async staff => {
          await staff.contact;
      });
  }
}
