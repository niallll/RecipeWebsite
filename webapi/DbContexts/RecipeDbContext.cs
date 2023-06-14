using Microsoft.EntityFrameworkCore;
using Npgsql;
using System.Xml;
using RankingApp.Models;
using RankingApp.Entities;

namespace RankingApp.DbContexts
{
    // Define your DbContext
    public class RecipeDbContext : DbContext
    {
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Instruction> Instructions { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Set up the PostgreSQL connection string
            var builder = new NpgsqlConnectionStringBuilder
            {
                Host = "localhost",
                Port = 5432,
                Username = "postgres",
                Password = "recipe",
                Database = "Recipe"
            };
            optionsBuilder.UseNpgsql(builder.ToString());
        }
    }
}
