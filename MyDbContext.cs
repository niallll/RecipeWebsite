using Microsoft.EntityFrameworkCore;
using Npgsql;
using System.Xml;
using RankingApp.Models;
using RankingApp.DataSets;

namespace RankingApp
{
    // Define your DbContext
    public class MyDbContext : DbContext
    {
        public DbSet<RecipeDataSet>? Recipes { get; set; }
        public DbSet<InstructionDataSet>? Instructions { get; set; }
        public DbSet<IngredientDataSet>? Ingredients { get; set; }

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
