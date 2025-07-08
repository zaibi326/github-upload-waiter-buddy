
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, Users, CreditCard, BarChart3, Settings } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Shopping Cart",
      description: "Complete cart functionality with item management",
      status: "Backend Ready"
    },
    {
      icon: Package,
      title: "Product Management",
      description: "Categories, sizes, weights, and product catalog",
      status: "Backend Ready"
    },
    {
      icon: Users,
      title: "User Authentication",
      description: "User registration, login, and profile management",
      status: "Backend Ready"
    },
    {
      icon: CreditCard,
      title: "Stripe Payments",
      description: "Secure payment processing with Stripe integration",
      status: "Backend Ready"
    },
    {
      icon: BarChart3,
      title: "Order Management",
      description: "Complete order tracking and management system",
      status: "Backend Ready"
    },
    {
      icon: Settings,
      title: "Admin Panel",
      description: "Admin settings and management features",
      status: "Backend Ready"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Ecommerce Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your backend is ready! Now let's build an amazing frontend experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-blue-600" />
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to Build?</CardTitle>
              <CardDescription>
                Your backend API is fully functional with all the ecommerce features you need.
                Let's start building your frontend components!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Build Product Catalog
                </Button>
                <Button variant="outline">
                  Create User Dashboard
                </Button>
                <Button variant="outline">
                  Design Shopping Cart
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Tell me what you'd like to build first, and I'll help you create it!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
