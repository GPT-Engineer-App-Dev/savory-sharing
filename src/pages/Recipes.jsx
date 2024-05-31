import { Container, Heading, SimpleGrid, Box, Text } from "@chakra-ui/react";

            const Recipes = () => {
                const recipes = [
                    { title: "Pasta Carbonara", description: "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper." },
                    { title: "Chicken Stir-Fry", description: "Quick and easy stir-fry with chicken, vegetables, and a savory sauce." },
                    { title: "Chocolate Chip Cookies", description: "Homemade cookies with gooey chocolate chips, perfect for dessert." },
                ];

                return (
                    <Container maxW="container.md" p={4}>
                        <Heading as="h1" size="xl" mb={4}>Popular Recipes</Heading>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                            {recipes.map((recipe, index) => (
                                <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                                    <Heading as="h2" size="md" mb={2}>{recipe.title}</Heading>
                                    <Text>{recipe.description}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Container>
                );
            };

            export default Recipes;