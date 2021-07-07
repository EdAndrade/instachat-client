import { mount } from '@vue/test-utils';
import NuxtLogo from '@/components/NuxtLogo.vue';

describe('NuxtLogo', () => {
	test('is a Vue instance', () => {
		const wrapper = mount(NuxtLogo);
		expect(wrapper.vm).toBeTruthy();
	});

	test('test to fail', () => {
		expect(1).toBe(1);
	});
});
