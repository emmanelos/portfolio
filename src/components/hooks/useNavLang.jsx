import { usePathname } from './usePathname'

export const useNavLang = (link) => {

	if (usePathname().startsWith("/es/")) {
		return `/es/${link}`
	} else {
		return `/${link}`
	}
}