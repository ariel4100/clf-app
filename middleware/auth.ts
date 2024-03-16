export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (!user.value && to.path === "/auth") return navigateTo("/login");
  else if (user.value && to.path === "/login") return navigateTo("/auth");
  else if (user.value && to.path === "/register") return navigateTo("/auth");
});